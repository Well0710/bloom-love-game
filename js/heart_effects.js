/**
 * Bloom 心动特效系统
 * 负责实现心跳、花瓣、光点、震动等心动感效果
 */

const HeartEffects = {
    // 花瓣容器引用
    petalContainer: null,
    sparkleContainer: null,

    /**
     * 初始化心动特效系统
     */
    init() {
        this.createContainers();
        console.log('HeartEffects initialized');
    },

    /**
     * 创建特效容器
     */
    createContainers() {
        // 花瓣容器
        this.petalContainer = document.createElement('div');
        this.petalContainer.className = 'petal-container';
        this.petalContainer.style.display = 'none';
        document.body.appendChild(this.petalContainer);

        // 光点容器
        this.sparkleContainer = document.createElement('div');
        this.sparkleContainer.className = 'sparkle-container';
        this.sparkleContainer.style.display = 'none';
        document.body.appendChild(this.sparkleContainer);
    },

    /**
     * 显示花瓣飘落效果
     * @param {number} count - 花瓣数量，默认15
     * @param {number} duration - 持续时间(ms)，默认6000
     */
    showPetals(count = 15, duration = 6000) {
        if (!this.petalContainer) this.createContainers();

        this.petalContainer.innerHTML = '';
        this.petalContainer.style.display = 'block';

        const colors = ['#ffb6c1', '#ffc0cb', '#fff0f5', '#ffe4e1', '#ffd1dc'];

        for (let i = 0; i < count; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (3 + Math.random() * 3) + 's';
            petal.style.animationDelay = Math.random() * 2 + 's';
            petal.style.background = `linear-gradient(135deg,
                ${colors[Math.floor(Math.random() * colors.length)]} 0%,
                ${colors[Math.floor(Math.random() * colors.length)]} 100%)`;
            petal.style.width = (10 + Math.random() * 10) + 'px';
            petal.style.height = petal.style.width;
            petal.style.opacity = 0.6 + Math.random() * 0.4;

            this.petalContainer.appendChild(petal);
        }

        // 动画结束后自动隐藏
        setTimeout(() => {
            this.hidePetals();
        }, duration);
    },

    /**
     * 隐藏花瓣效果
     */
    hidePetals() {
        if (this.petalContainer) {
            this.petalContainer.style.display = 'none';
            this.petalContainer.innerHTML = '';
        }
    },

    /**
     * 显示光点闪烁效果（好感度高时）
     * @param {HTMLElement} targetEl - 目标元素，光点将在其周围出现
     * @param {number} count - 光点数量，默认20
     */
    showSparkles(targetEl, count = 20) {
        if (!this.sparkleContainer) this.createContainers();

        this.sparkleContainer.innerHTML = '';
        this.sparkleContainer.style.display = 'block';

        const rect = targetEl.getBoundingClientRect();

        for (let i = 0; i < count; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';

            // 在目标元素周围随机分布
            const angle = Math.random() * Math.PI * 2;
            const distance = 20 + Math.random() * 80;
            const x = rect.left + rect.width / 2 + Math.cos(angle) * distance;
            const y = rect.top + rect.height / 2 + Math.sin(angle) * distance;

            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.animationDelay = Math.random() * 1.5 + 's';
            sparkle.style.width = (2 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;

            // 随机颜色
            const sparkleColors = ['#fff', '#ffd1dc', '#ffb6c1', '#fff0f5', '#ffc0cb'];
            sparkle.style.background = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];

            this.sparkleContainer.appendChild(sparkle);
        }
    },

    /**
     * 隐藏光点效果
     */
    hideSparkles() {
        if (this.sparkleContainer) {
            this.sparkleContainer.style.display = 'none';
            this.sparkleContainer.innerHTML = '';
        }
    },

    /**
     * 触发画面震动效果（两难选择时）
     * @param {HTMLElement} targetEl - 要震动的元素，默认游戏容器
     */
    triggerScreenShake(targetEl = null) {
        const container = targetEl || document.getElementById('game-container') || document.body;
        container.classList.add('screen-shake');

        setTimeout(() => {
            container.classList.remove('screen-shake');
        }, 500);
    },

    /**
     * 触发闪光效果（关键剧情）
     */
    triggerFlash() {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            opacity: 0;
            z-index: 9999;
            pointer-events: none;
            animation: flash-effect 0.4s ease-out;
        `;

        // 添加动画样式
        if (!document.getElementById('flash-animation-style')) {
            const style = document.createElement('style');
            style.id = 'flash-animation-style';
            style.textContent = `
                @keyframes flash-effect {
                    0% { opacity: 0; }
                    20% { opacity: 0.8; }
                    100% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(flash);

        setTimeout(() => {
            flash.remove();
        }, 400);
    },

    /**
     * 创建浮动爱心（心动时刻）
     * @param {HTMLElement} targetEl - 目标元素
     * @param {number} count - 爱心数量
     */
    createFloatingHearts(targetEl, count = 5) {
        const rect = targetEl.getBoundingClientRect();
        const container = document.createElement('div');
        container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1000;overflow:hidden;';
        document.body.appendChild(container);

        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.style.cssText = `
                position: absolute;
                left: ${rect.left + rect.width / 2 + (Math.random() - 0.5) * 50}px;
                top: ${rect.top + rect.height / 2}px;
                font-size: ${16 + Math.random() * 12}px;
                color: hsl(${340 + Math.random() * 30}, 80%, 65%);
                text-shadow: 0 0 10px rgba(255, 100, 150, 0.8);
                animation: heart-float ${2 + Math.random()}s ease-out forwards;
                animation-delay: ${i * 0.15}s;
            `;
            container.appendChild(heart);
        }

        setTimeout(() => container.remove(), 3500);
    },

    /**
     * 更新角色好感度光环
     * @param {HTMLElement} charEl - 角色元素
     * @param {number} affectionLevel - 好感等级 1-10
     */
    updateCharAura(charEl, affectionLevel) {
        const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
        const level = clamp(affectionLevel, 1, 10);

        // 根据好感等级调整光环效果
        const auraSize = 60 + level * 8;
        const auraOpacity = 0.2 + level * 0.05;
        const glowIntensity = level * 2;

        charEl.style.setProperty('--aura-size', auraSize + 'px');
        charEl.style.setProperty('--aura-opacity', auraOpacity);
        charEl.style.filter = `drop-shadow(0 0 ${glowIntensity}px var(--char-color, rgba(255,200,220,0.5)))`;

        // 好感等级高时添加额外动画
        if (level >= 7) {
            charEl.classList.add('char-aura-active');
        } else {
            charEl.classList.remove('char-aura-active');
        }
    },

    /**
     * 心动时刻组合效果
     * @param {Object} options - 配置选项
     */
    triggerHeartbeatMoment(options = {}) {
        const {
            showPetals: enablePetals = true,
            triggerShake = false,
            triggerFlash = false,
            floatingHearts = false,
            targetEl = null,
            duration = 5000
        } = options;

        if (enablePetals) this.showPetals(20, duration);
        if (triggerShake) this.triggerScreenShake();
        if (triggerFlash) this.triggerFlash();
        if (floatingHearts && targetEl) this.createFloatingHearts(targetEl, 8);
    },

    /**
     * 好感升级特效
     * @param {HTMLElement} charEl - 角色元素
     */
    triggerAffectionUpgrade(charEl) {
        // 1. 触发闪光
        this.triggerFlash();

        // 2. 角色光环增强
        this.updateCharAura(charEl, 10);
        charEl.classList.add('flash-effect');

        // 3. 出现浮动爱心
        this.createFloatingHearts(charEl, 10);

        // 4. 显示花瓣
        this.showPetals(25, 4000);

        setTimeout(() => {
            charEl.classList.remove('flash-effect');
        }, 300);
    },

    /**
     * 表白成功特效
     * @param {HTMLElement} charEl - 角色元素
     */
    triggerConfessionSuccess(charEl) {
        // 持续花瓣飘落
        this.showPetals(30, 8000);

        // 多次闪光
        this.triggerFlash();
        setTimeout(() => this.triggerFlash(), 500);
        setTimeout(() => this.triggerFlash(), 1000);

        // 角色特效
        if (charEl) {
            this.createFloatingHearts(charEl, 15);
            charEl.classList.add('heartbeat');
        }

        // 震动效果
        this.triggerScreenShake();
        setTimeout(() => this.triggerScreenShake(), 300);
    },

    /**
     * 清理所有特效
     */
    cleanup() {
        this.hidePetals();
        this.hideSparkles();
    }
};

// 自动初始化
document.addEventListener('DOMContentLoaded', () => {
    HeartEffects.init();
});

// 导出供外部使用
window.HeartEffects = HeartEffects;
