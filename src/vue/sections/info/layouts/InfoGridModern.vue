<template>
    <div class="skills-grid-modern">
        <div v-for="item in props.items" 
             :key="item.locales.title"
             class="skill-card"
             @mouseenter="handleHover"
             @mouseleave="handleLeave">
            <div class="skill-card-inner">
                <!-- Icon Container -->
                <div class="skill-icon-wrapper">
                    <img v-if="item.imageIconUrl" 
                         :src="item.imageIconUrl" 
                         :alt="item.locales.title"
                         class="skill-icon">
                    <i v-else :class="item.faIcon" class="skill-icon-fa"></i>
                </div>
                
                <!-- Title -->
                <h4 class="skill-title">{{ item.locales.title }}</h4>
                
                <!-- Decorative gradient background -->
                <div class="skill-card-gradient"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
/**
 * @property {Object[]} items
 */
const props = defineProps({
    items: Array,
})

const handleHover = (e) => {
    const card = e.currentTarget
    card.style.transform = 'translateY(-8px) scale(1.02)'
}

const handleLeave = (e) => {
    const card = e.currentTarget
    card.style.transform = 'translateY(0) scale(1)'
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.skills-grid-modern {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1.5rem;
    padding: 1rem 0;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 1rem;
    }
}

.skill-card {
    position: relative;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    
    &:hover {
        .skill-card-inner {
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(var(--primary-rgb), 0.5);
            box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.15),
                0 0 0 1px rgba(var(--primary-rgb), 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .skill-card-gradient {
            opacity: 1;
        }
        
        .skill-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
        }
        
        .skill-title {
            color: var(--primary);
        }
    }
}

.skill-card-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.75rem 1rem;
    min-height: 140px;
    
    // Glassmorphism effect
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    
    box-shadow: 
        0 4px 16px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    
    @media (max-width: 768px) {
        padding: 1.5rem 0.75rem;
        min-height: 120px;
    }
}

.skill-card-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 50% 0%,
        rgba(var(--primary-rgb), 0.15) 0%,
        transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 0;
}

.skill-icon-wrapper {
    position: relative;
    width: 56px;
    height: 56px;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    
    @media (max-width: 768px) {
        width: 48px;
        height: 48px;
        margin-bottom: 0.5rem;
    }
}

.skill-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
}

.skill-icon-fa {
    font-size: 2.5rem;
    color: var(--primary);
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
}

.skill-title {
    position: relative;
    font-size: 0.95rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    color: var(--text-normal);
    transition: color 0.3s ease;
    z-index: 1;
    line-height: 1.3;
    
    @media (max-width: 768px) {
        font-size: 0.875rem;
    }
}

// Dark mode adjustments
@media (prefers-color-scheme: dark) {
    .skill-card-inner {
        background: rgba(255, 255, 255, 0.03);
        border-color: rgba(255, 255, 255, 0.08);
    }
    
    .skill-card:hover .skill-card-inner {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(var(--primary-rgb), 0.4);
    }
}

// Light mode adjustments  
@media (prefers-color-scheme: light) {
    .skill-card-inner {
        background: rgba(255, 255, 255, 0.7);
        border-color: rgba(0, 0, 0, 0.08);
        box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
    }
    
    .skill-card:hover .skill-card-inner {
        background: rgba(255, 255, 255, 0.95);
        border-color: rgba(var(--primary-rgb), 0.3);
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.12),
            0 0 0 1px rgba(var(--primary-rgb), 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 1);
    }
}

// Animation for initial load
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.skill-card {
    animation: fadeInUp 0.5s ease-out backwards;
    
    @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
            animation-delay: #{$i * 0.05}s;
        }
    }
}
</style>
