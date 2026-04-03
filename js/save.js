// 存档系统

const SAVE_VERSION = '1.0';
const MAX_SAVE_SLOTS = 6;

class SaveSystem {
    constructor() {
        this.storageKey = 'bloom_love_saves';
        this.saves = this.loadSaves();
    }

    // 从 localStorage 加载所有存档
    loadSaves() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('加载存档失败:', e);
            return [];
        }
    }

    // 保存存档
    save(slotIndex, gameState) {
        if (slotIndex < 0 || slotIndex >= MAX_SAVE_SLOTS) {
            return false;
        }

        const saveData = {
            version: SAVE_VERSION,
            timestamp: Date.now(),
            chapter: gameState.currentChapter,
            playerName: gameState.player.name,
            playerMbti: gameState.player.mbti,
            storyProgress: gameState.currentStoryId,
            characters: {}
        };

        // 保存角色好感度
        Object.keys(CHARACTERS).forEach(key => {
            if (key !== 'player') {
                saveData.characters[key] = {
                    affection: CHARACTERS[key].affection,
                    met: gameState.metCharacters?.includes(key) || false
                };
            }
        });

        this.saves[slotIndex] = saveData;
        this.persist();
        return true;
    }

    // 读取存档
    load(slotIndex) {
        if (slotIndex < 0 || slotIndex >= MAX_SAVE_SLOTS) {
            return null;
        }

        const saveData = this.saves[slotIndex];
        if (!saveData) {
            return null;
        }

        // 恢复角色好感度
        resetCharacterAffection();
        Object.keys(saveData.characters).forEach(key => {
            if (CHARACTERS[key]) {
                CHARACTERS[key].affection = saveData.characters[key].affection || 0;
            }
        });

        return {
            currentChapter: saveData.chapter,
            currentStoryId: saveData.storyProgress,
            player: {
                name: saveData.playerName,
                mbti: saveData.playerMbti
            },
            metCharacters: Object.keys(saveData.characters).filter(key => saveData.characters[key].met)
        };
    }

    // 获取存档信息（用于显示）
    getSaveInfo(slotIndex) {
        if (slotIndex < 0 || slotIndex >= MAX_SAVE_SLOTS) {
            return null;
        }

        const saveData = this.saves[slotIndex];
        if (!saveData) {
            return null;
        }

        return {
            exists: true,
            timestamp: saveData.timestamp,
            chapter: saveData.chapter,
            playerName: saveData.playerName,
            playerMbti: saveData.playerMbti,
            formattedTime: this.formatTime(saveData.timestamp)
        };
    }

    // 检查是否有存档
    hasSaves() {
        return this.saves.some(save => save !== null && save !== undefined);
    }

    // 删除存档
    delete(slotIndex) {
        if (slotIndex >= 0 && slotIndex < MAX_SAVE_SLOTS) {
            this.saves[slotIndex] = null;
            this.persist();
            return true;
        }
        return false;
    }

    // 持久化到 localStorage
    persist() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.saves));
        } catch (e) {
            console.error('保存存档失败:', e);
        }
    }

    // 格式化时间
    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;

        // 今天
        if (diff < 24 * 60 * 60 * 1000 && date.getDate() === now.getDate()) {
            return `今天 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        }

        // 昨天
        if (diff < 48 * 60 * 60 * 1000) {
            return `昨天 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        }

        // 其他日期
        return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }

    // 获取所有存档槽位信息
    getAllSlots() {
        const slots = [];
        for (let i = 0; i < MAX_SAVE_SLOTS; i++) {
            slots.push({
                index: i,
                info: this.getSaveInfo(i)
            });
        }
        return slots;
    }
}

// 创建全局存档系统实例
const saveSystem = new SaveSystem();

// 游戏状态管理
class GameState {
    constructor() {
        this.player = { ...CHARACTERS.player };
        this.currentChapter = 1;
        this.currentStoryId = 'start';
        this.metCharacters = [];
        this.flags = {}; // 剧情标志
        this.history = []; // 对话历史
    }

    // 重置游戏状态
    reset() {
        this.player = { ...CHARACTERS.player };
        this.currentChapter = 1;
        this.currentStoryId = 'start';
        this.metCharacters = [];
        this.flags = {};
        this.history = [];
        resetCharacterAffection();
    }

    // 设置玩家信息
    setPlayer(name, age, job, mbti) {
        this.player.name = name;
        this.player.age = age;
        this.player.job = job;
        this.player.mbti = mbti;
    }

    // 标记角色已遇见
    markMet(characterId) {
        if (!this.metCharacters.includes(characterId)) {
            this.metCharacters.push(characterId);
        }
    }

    // 设置剧情标志
    setFlag(flagName, value) {
        this.flags[flagName] = value;
    }

    // 获取剧情标志
    getFlag(flagName, defaultValue = false) {
        return this.flags[flagName] !== undefined ? this.flags[flagName] : defaultValue;
    }

    // 添加到对话历史
    addToHistory(speaker, text) {
        this.history.push({ speaker, text, timestamp: Date.now() });
    }

    // 导出状态用于存档
    export() {
        return {
            player: this.player,
            currentChapter: this.currentChapter,
            currentStoryId: this.currentStoryId,
            metCharacters: this.metCharacters,
            flags: this.flags
        };
    }

    // 从存档导入状态
    import(state) {
        this.player = { ...this.player, ...state.player };
        this.currentChapter = state.currentChapter;
        this.currentStoryId = state.currentStoryId;
        this.metCharacters = state.metCharacters || [];
        this.flags = state.flags || {};
    }
}

// 创建全局游戏状态实例
const gameState = new GameState();
