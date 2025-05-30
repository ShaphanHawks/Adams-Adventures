
// Adventures with Adam - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Add click sound effects
    const buttons = document.querySelectorAll('.btn, .download-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create a fun visual effect
            createClickEffect(e.target);
            
            // Prevent default for download buttons (since they're placeholders)
            if (this.classList.contains('download-btn')) {
                e.preventDefault();
                showComingSoonAlert();
            }
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .game-card, .activity-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
    
    // Add dynamic chaos to the chaos zone
    if (window.location.pathname.includes('chaos-zone')) {
        addChaosEffects();
    }
    
    // Add floating animation to hero elements
    addFloatingAnimation();
});

function createClickEffect(element) {
    // Create a temporary explosion effect
    const explosion = document.createElement('div');
    explosion.innerHTML = '💥';
    explosion.style.position = 'fixed';
    explosion.style.fontSize = '2rem';
    explosion.style.zIndex = '9999';
    explosion.style.pointerEvents = 'none';
    explosion.style.animation = 'explode 1s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    explosion.style.left = rect.left + rect.width / 2 + 'px';
    explosion.style.top = rect.top + rect.height / 2 + 'px';
    
    document.body.appendChild(explosion);
    
    // Add CSS animation if not already present
    if (!document.querySelector('#explosion-style')) {
        const style = document.createElement('style');
        style.id = 'explosion-style';
        style.textContent = `
            @keyframes explode {
                0% {
                    transform: scale(0.5) translate(-50%, -50%);
                    opacity: 1;
                }
                100% {
                    transform: scale(2) translate(-50%, -50%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        explosion.remove();
    }, 1000);
}

function showComingSoonAlert() {
    alert('💥 BOOM! This awesome content is coming soon! Keep checking back for more epic adventures! 🚀');
}

function addChaosEffects() {
    // Add random floating emojis to chaos zone
    const chaosEmojis = ['💥', '⚡', '🚀', '💣', '🎯', '🔥'];
    
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every interval
            createFloatingEmoji(chaosEmojis[Math.floor(Math.random() * chaosEmojis.length)]);
        }
    }, 2000);
}

function createFloatingEmoji(emoji) {
    const floater = document.createElement('div');
    floater.innerHTML = emoji;
    floater.style.position = 'fixed';
    floater.style.fontSize = '2rem';
    floater.style.zIndex = '1000';
    floater.style.pointerEvents = 'none';
    floater.style.left = Math.random() * window.innerWidth + 'px';
    floater.style.top = window.innerHeight + 'px';
    floater.style.animation = 'float-up 4s linear forwards';
    
    document.body.appendChild(floater);
    
    // Add floating animation if not present
    if (!document.querySelector('#float-style')) {
        const style = document.createElement('style');
        style.id = 'float-style';
        style.textContent = `
            @keyframes float-up {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        floater.remove();
    }, 4000);
}

function addFloatingAnimation() {
    // Add subtle floating animation to feature icons
    const icons = document.querySelectorAll('.feature-icon');
    icons.forEach((icon, index) => {
        icon.style.animation = `gentle-float 3s ease-in-out infinite ${index * 0.5}s`;
    });
    
    // Add floating animation CSS if not present
    if (!document.querySelector('#gentle-float-style')) {
        const style = document.createElement('style');
        style.id = 'gentle-float-style';
        style.textContent = `
            @keyframes gentle-float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add some fun console messages for curious adventurers
console.log('%c💥 BOOM! Welcome to Adventures with Adam! 💥', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Ready for some epic adventures? 🚀', 'color: #1F5F99; font-size: 16px;');
console.log('%cIf you can see this, you must be a real adventurer! Keep exploring! 🎮', 'color: #FFD700; font-size: 14px;');
