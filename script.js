// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            
            setTimeout(() => {
                progressBar.style.width = width;
            }, 300);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('กรุณากรอกอีเมลให้ถูกต้อง');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'กำลังส่ง...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect for name when page loads
window.addEventListener('load', () => {
    const nameEl = document.querySelector('.typing-name');
    if (nameEl) {
        const fullText = nameEl.textContent.trim();
        typeWriter(nameEl, fullText, 120);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.profile-placeholder');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Mouse-based parallax for floating hero images
(function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const bgImgs = document.querySelectorAll('.hero-bg-images .bg-img');
    if (!hero || bgImgs.length === 0) return;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const relX = (e.clientX - rect.left - rect.width / 2) / rect.width; // -0.5 to 0.5
        const relY = (e.clientY - rect.top - rect.height / 2) / rect.height; // -0.5 to 0.5

        bgImgs.forEach((img) => {
            const speed = parseFloat(img.getAttribute('data-speed') || '2');
            const translateX = relX * speed * 30; // adjust strength
            const translateY = relY * speed * 30;
            img.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        });
    });

    hero.addEventListener('mouseleave', () => {
        bgImgs.forEach((img) => {
            img.style.transform = 'translate3d(0, 0, 0)';
        });
    });
})();

// Counter animation for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const target = parseInt(statNumber.textContent);
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                statNumber.textContent = Math.floor(current) + '+';
            }, 30);
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Social media links hover effect
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.background = '#1d4ed8';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.background = '#2563eb';
});

// Add CSS for scroll to top button
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top:hover {
        transform: scale(1.1);
        background: #1d4ed8 !important;
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    .loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class to body
    document.body.classList.add('loaded');
    
    // Initialize any additional functionality here
    console.log('Portfolio website loaded successfully!');

    // Initialize FinisherHeader for project detail page headers (supports per-page presets/overrides)
    const projectHeaderFinisher = document.querySelector('.project-header .project-page-finisher');
    if (projectHeaderFinisher) {
        try {
            // Presets
            const FINISHER_PRESETS = {
                home: {
                    count: 4,
                    size: { min: 1200, max: 1500, pulse: 0.1 },
                    speed: { x: { min: 0, max: 0.2 }, y: { min: 0, max: 0.2 } },
                    colors: { background: '#1600ff', particles: ['#0d0a20', '#dde14a', '#ffc648', '#a81bc9'] },
                    blending: 'lighten',
                    opacity: { center: 0.8, edge: 0.2 },
                    skew: -2,
                    shapes: ['c', 't']
                },
                wifi: {
                    count: 100,
                    size: { min: 2, max: 8, pulse: 0 },
                    speed: { x: { min: 0.1, max: 0 }, y: { min: 0, max: 0.1 } },
                    colors: { background: '#201e30', particles: ['#1761a6', '#00427f', '#0095ff'] },
                    blending: 'overlay',
                    opacity: { center: 1, edge: 0 },
                    skew: -2,
                    shapes: ['s']
                },
                studentloan: {
                    count: 10,
                    size: { min: -5, max: 1800, pulse: 0 },
                    speed: { x: { min: 0.1, max: 0.6 }, y: { min: 0.1, max: 0.6 } },
                    colors: { background: '#9138e5', particles: ['#ff4848', '#000000', '#2235e5', '#000000', '#ff0000'] },
                    blending: 'overlay',
                    opacity: { center: 0.5, edge: 0.05 },
                    skew: -2,
                    shapes: ['s', 't']
                },
                music: {
                    count: 35,
                    size: { min: -5, max: 120, pulse: 0.1 },
                    speed: { x: { min: 0, max: 0.2 }, y: { min: 0, max: 0.2 } },
                    colors: {
                        background: '#0043a43',
                        particles: ['##00bdff', '#243886', '#7b36a2', '#a8f24d', '#fcb121']
                    },
                    blending: 'overlay',
                    opacity: { center: 0, edge: 0.7 },
                    skew: -2,
                    shapes: ['c']
                }
            };

            function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

            // Choose preset via data attribute or fallback
            const presetName = projectHeaderFinisher.getAttribute('data-finisher-preset') || 'home';
            const baseConfig = deepClone(FINISHER_PRESETS[presetName] || FINISHER_PRESETS.home);

            // Allow overrides via data- attributes
            const ds = projectHeaderFinisher.dataset;
            if (ds.finisherCount) baseConfig.count = parseInt(ds.finisherCount, 10);
            if (ds.finisherBackground) baseConfig.colors.background = ds.finisherBackground;
            if (ds.finisherParticles) baseConfig.colors.particles = ds.finisherParticles.split(',').map(s => s.trim());
            if (ds.finisherBlending) baseConfig.blending = ds.finisherBlending;
            if (ds.finisherSkew) baseConfig.skew = parseFloat(ds.finisherSkew);
            if (ds.finisherShapes) baseConfig.shapes = ds.finisherShapes.split(',').map(s => s.trim());

            if (ds.finisherSizeMin) baseConfig.size.min = parseFloat(ds.finisherSizeMin);
            if (ds.finisherSizeMax) baseConfig.size.max = parseFloat(ds.finisherSizeMax);
            if (ds.finisherSizePulse) baseConfig.size.pulse = parseFloat(ds.finisherSizePulse);

            if (ds.finisherSpeedXMin) baseConfig.speed.x.min = parseFloat(ds.finisherSpeedXMin);
            if (ds.finisherSpeedXMax) baseConfig.speed.x.max = parseFloat(ds.finisherSpeedXMax);
            if (ds.finisherSpeedYMin) baseConfig.speed.y.min = parseFloat(ds.finisherSpeedYMin);
            if (ds.finisherSpeedYMax) baseConfig.speed.y.max = parseFloat(ds.finisherSpeedYMax);

            if (ds.finisherOpacityCenter) baseConfig.opacity.center = parseFloat(ds.finisherOpacityCenter);
            if (ds.finisherOpacityEdge) baseConfig.opacity.edge = parseFloat(ds.finisherOpacityEdge);

            // Apply required className for library lookup
            baseConfig.className = 'project-page-finisher';

            projectHeaderFinisher.classList.add('finisher-header');
            new FinisherHeader(baseConfig);
        } catch (err) {
            console.warn('FinisherHeader init failed for project header', err);
        }
    }

    // Remove mouse parallax for project header to match Home behavior

    // Initialize FinisherHeader for each project image as background
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach((img, idx) => {
        // create unique container for finisher per card
        const finisherDiv = document.createElement('div');
        const baseClass = 'finisher-card';
        const uniqueClass = `${baseClass}-${idx}`;
        finisherDiv.className = `finisher-header ${baseClass} ${uniqueClass}`;
        // ensure the container fills the project-image
        finisherDiv.style.position = 'absolute';
        finisherDiv.style.inset = '0';
        finisherDiv.style.zIndex = '0';
        img.prepend(finisherDiv);

        try {
            new FinisherHeader({
                className: uniqueClass,
                count: 6,
                size: { min: 200, max: 400, pulse: 0 },
                speed: { x: { min: 0, max: 0.15 }, y: { min: 0, max: 0.15 } },
                colors: {
                    background: '#000000', // overridden via CSS to transparent
                    particles: ['#ffffff', '#93c5fd', '#60a5fa', '#3b82f6']
                },
                blending: 'screen',
                opacity: { center: 0.5, edge: 0.05 },
                skew: 0,
                shapes: ['c', 't']
            });
        } catch (err) {
            console.warn('FinisherHeader init failed for project card', idx, err);
        }
    });
}); 

// Lightbox for project gallery
(function initLightbox() {
    const galleryImages = Array.from(document.querySelectorAll('.project-gallery .gallery-image'));
    if (galleryImages.length === 0) return;

    const overlay = document.getElementById('lightbox');
    const imgEl = document.getElementById('lightboxImage');
    const btnClose = document.getElementById('lightboxClose');
    const btnPrev = document.getElementById('lightboxPrev');
    const btnNext = document.getElementById('lightboxNext');

    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        imgEl.src = galleryImages[currentIndex].src;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        overlay.classList.remove('active');
        imgEl.src = '';
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        imgEl.src = galleryImages[currentIndex].src;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        imgEl.src = galleryImages[currentIndex].src;
    }

    galleryImages.forEach((image, index) => {
        image.style.cursor = 'zoom-in';
        image.addEventListener('click', () => openLightbox(index));
    });

    btnClose.addEventListener('click', closeLightbox);
    btnPrev.addEventListener('click', showPrev);
    btnNext.addEventListener('click', showNext);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
})(); 