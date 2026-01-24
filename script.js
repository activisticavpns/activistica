// FORM HANDLING
const vpnForm = document.getElementById('vpnForm');

vpnForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const country = this.querySelector('select').value;
    
    // Animation for button
    const btn = this.querySelector('.btn-submit');
    const originalText = btn.textContent;
    
    btn.textContent = 'CONNECTING...';
    btn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        btn.textContent = '✓ CONNECTED';
        btn.style.background = 'linear-gradient(135deg, #00ff00, #00ff00)';
        
        // Show success message
        const note = document.querySelector('.form-note');
        note.textContent = `VPN activated for ${email} (${country.toUpperCase()})`;
        note.style.color = 'var(--primary)';
        note.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.7)';
        
        // Reset after 3 seconds
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = '';
            note.textContent = 'халяные сервера для обхода белых списков и прочего';
            note.style.color = '';
            note.style.textShadow = '';
            vpnForm.reset();
        }, 3000);
    }, 1500);
});

// GLITCH EFFECT on title (occasional)
const title = document.querySelector('.title');

function triggerGlitch() {
    title.style.textShadow = `
        0 0 20px rgba(0, 255, 0, 0.7),
        0 0 40px rgba(0, 255, 0, 0.3),
        3px 3px 0 rgba(255, 0, 255, 0.5),
        -3px -3px 0 rgba(0, 255, 255, 0.5)
    `;
    
    setTimeout(() => {
        title.style.textShadow = '0 0 20px rgba(0, 255, 0, 0.7), 0 0 40px rgba(0, 255, 0, 0.3)';
    }, 100);
}

// Random glitch every 5-10 seconds
setInterval(() => {
    if (Math.random() > 0.7) {
        triggerGlitch();
    }
}, 5000 + Math.random() * 5000);

// PARALLAX EFFECT on scroll
document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
    
    // Update grid animation
    const grid = document.querySelector('.grid');
    if (grid) {
        grid.style.backgroundPosition = `${scrolled * 0.2}px ${scrolled * 0.2}px`;
    }
});

// INTERACTIVE MOUSE EFFECT
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Subtle glow effect near cursor on features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        const rect = feature.getBoundingClientRect();
        const featureX = (rect.left + rect.width / 2) / window.innerWidth;
        const featureY = (rect.top + rect.height / 2) / window.innerHeight;
        
        const distance = Math.sqrt(
            Math.pow(mouseX - featureX, 2) + 
            Math.pow(mouseY - featureY, 2)
        );
        
        if (distance < 0.3) {
            const intensity = (1 - distance / 0.3) * 0.2;
            feature.style.boxShadow = `0 0 ${30 * intensity}px rgba(0, 255, 0, ${0.3 * intensity})`;
        } else {
            feature.style.boxShadow = '';
        }
    });
});

// ADD TERMINAL-LIKE EFFECT
window.addEventListener('load', () => {
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.boxShadow = '';
        });
    });
});

console.log('%c ACTIVISTICA ', 'background: #00ff00; color: #000000; font-size: 16px; font-weight: bold;');
console.log('%c  ', 'color: #00ffff; font-size: 12px; letter-spacing: 2px;');
