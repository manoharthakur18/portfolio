
const roles = [
    'Full-Stack Developer',
    'React/Next.js Specialist',
    'Node.js & Express.js Expert',
    'Python & FastApi Expert'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.querySelector('.typewriter');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseDuration = 2000;

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let timeout = isDeleting ? deletingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentRole.length) {
        timeout = pauseDuration;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    setTimeout(typeWriter, timeout);
}

// Start typewriter effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 500);
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-category')) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.setProperty('--progress-width', progress + '%');
                    bar.style.width = progress + '%';
                });
            }
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Handling
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show success message (in real app, this would send to backend)
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon!`);
    
    // Reset form
    e.target.reset();
    
    return false;
}

// Project Modal
const projectDetails = [
    {
        title: 'Product Research & Survey Platform',
        description: 'A comprehensive full-stack research and survey platform built for on-site client deployment. Features dedicated Admin, Client, and Audience portals for managing surveys and collecting product feedback. Built with Python/FastAPI for backend operations and Next.js/TypeScript for modular, scalable frontend components with efficient API caching via RTK Query.',
        technologies: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'RTK Query', 'PostgreSQL', 'REST API'],
        features: [
            'Multi-portal architecture (Admin, Client, Audience)',
            'RESTful API with FastAPI',
            'Database design & implementation',
            'Business logic implementation',
            'Modular Next.js components',
            'Efficient API caching with RTK Query',
            'On-site client deployment'
        ]
    },
    {
        title: 'Cap-Ex Management Dashboard',
        description: 'A role-based capital expenditure tracking dashboard with separate Admin and Consumer views. Built with Node.js and Express.js for backend operations, featuring role-based access control to secure routes and conditionally render pages based on user roles. Tracks capital expenditure across different timeframes with seamless data integration.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'Material UI', 'Tailwind CSS', 'Axios', 'Role-based Access Control'],
        features: [
            'Role-based Admin & Consumer views',
            'RESTful API architecture',
            'Secure route protection',
            'Conditional page rendering',
            'Responsive UI components',
            'Seamless frontend-backend data flow',
            'Capital expenditure tracking'
        ]
    },
    {
        title: 'Multichannel Video Player',
        description: 'A sophisticated web application that synchronizes multiple video streams for a cohesive viewing experience. Features a centralized controller to manage playback, pause, and seek functions for all videos simultaneously. Ideal for collaborative content review, educational demonstrations, and multi-angle event broadcasts with precise control over each video\'s state.',
        technologies: ['React.JS', 'Webpack', 'Scala', 'JavaScript', 'Zustand', 'Tanstack Table', 'Jest', 'i18n'],
        features: [
            'Multi-video synchronization',
            'Centralized playback controller',
            'Precise seek & state management',
            'Dynamic video handling',
            'Interactive controls',
            'Optimized performance',
            'Internationalization support'
        ]
    },
    {
        title: 'Movie Rating Platform',
        description: 'A feature-rich movie rating and review website with enhanced user interface and optimized performance. Built with React.js for modular component architecture, featuring custom APIs for movie data management, user reviews, and ratings. Includes code refactoring for improved maintainability, API integration with external movie databases, and performance optimizations for faster load times.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Redux'],
        features: [
            'Enhanced user interface & UX',
            'Custom RESTful APIs',
            'Movie search & filtering',
            'User ratings & reviews',
            'Optimized code performance',
            'Modular React components',
            'External API integration',
            'Responsive design'
        ]
    },
    {
        title: 'E-Commerce Mobile App',
        description: 'A cross-platform mobile e-commerce application built with React Native. Features a complete shopping experience with product browsing, reviews, cart management, and secure checkout. Developed with reusable component architecture including product listings, detail views, reviews, carousels, wishlist functionality, payment integration, fare calculation, and a seamless checkout flow.',
        technologies: ['React Native', 'JavaScript', 'Redux', 'REST API', 'Payment Gateway Integration'],
        features: [
            'Cross-platform mobile app',
            'Reusable component architecture',
            'Product listing & details screens',
            'Add to cart & wishlist',
            'Product reviews & ratings',
            'Image carousels',
            'Fare calculation & checkout',
            'Payment gateway integration'
        ]
    }
];

function openProjectModal(index) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectDetails[index];
    
    modalBody.innerHTML = `
        <h2 style="font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #8b5cf6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1.5rem;">
            ${project.title}
        </h2>
        <p style="font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 2rem; line-height: 1.8;">
            ${project.description}
        </p>
        
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--color-text-primary);">
            Technologies Used
        </h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
            ${project.technologies.map(tech => `
                <span style="padding: 0.5rem 1rem; background: rgba(139, 92, 246, 0.2); border: 1px solid rgba(139, 92, 246, 0.4); border-radius: 20px; font-size: 0.9rem; color: var(--color-primary);">
                    ${tech}
                </span>
            `).join('')}
        </div>
        
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--color-text-primary);">
            Key Features
        </h3>
        <ul style="list-style: none; padding-left: 0;">
            ${project.features.map(feature => `
                <li style="padding-left: 1.5rem; position: relative; margin-bottom: 0.75rem; color: var(--color-text-secondary); line-height: 1.6;">
                    <span style="position: absolute; left: 0; color: var(--color-primary); font-size: 1.2rem;">▹</span>
                    ${feature}
                </li>
            `).join('')}
        </ul>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('projectModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Parallax Effect for Hero Section & Scroll Indicator
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const floatingOrbs = document.querySelectorAll('.floating-orb');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
    
    floatingOrbs.forEach((orb, index) => {
        orb.style.transform = `translateY(${scrolled * (0.2 + index * 0.1)}px)`;
    });
    
    // Hide scroll indicator when scrolling down, show when at top
    if (scrollIndicator) {
        if (scrolled > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
});

// Add Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console Easter Egg
console.log('%c👋 Hello there!', 'font-size: 24px; font-weight: bold; color: #8b5cf6;');
console.log('%cLooking at the code? I like your style! 😎', 'font-size: 14px; color: #06b6d4;');
console.log('%cFeel free to reach out if you want to collaborate!', 'font-size: 14px; color: #94a3b8;');
