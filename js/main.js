// Panda City Website JavaScript
// Modern gaming website with smooth interactions

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize all components
    handleLoadingScreen();
    setupNavigation();
    setupHeroAnimations();
    setupSmoothScrolling();
    setupCounterAnimations();
    setupIntersectionObserver();
    setupBackToTop();
    setupNewsSystem();
    setupMobileMenu();
    setupParallaxEffects();
}

// Loading Screen Handler
function handleLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Animate loading progress
    setTimeout(() => {
        loadingProgress.style.width = '100%';
    }, 500);
    
    // Hide loading screen after animation
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'visible';
        
        // Trigger hero animations
        triggerHeroAnimations();
    }, 3500);
}

// Navigation Setup
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile Menu Setup
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'visible';
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        }
    });
}

// Hero Animations
function setupHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero-content > *');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
    });
}

function triggerHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero-content > *');
    
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Counter Animations
function setupCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    let hasAnimated = false;
    
    function animateCounters() {
        if (hasAnimated) return;
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
        
        hasAnimated = true;
    }
    
    // Trigger animation when hero section is visible
    const heroSection = document.getElementById('home');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateCounters, 1000); // Delay for loading screen
            }
        });
    }, { threshold: 0.5 });
    
    if (heroSection) {
        observer.observe(heroSection);
    }
}

// Intersection Observer for Animations
function setupIntersectionObserver() {
    const animatedElements = document.querySelectorAll(
        '.feature-item, .step-item, .news-item, .contact-item, .download-box'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Back to Top Button
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Parallax Effects
function setupParallaxEffects() {
    const heroBackground = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });
}

// News System
function setupNewsSystem() {
    loadNewsItems();
    setupNewsLoadMore();
}

function loadNewsItems() {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;
    
    // Sample news data - in a real application, this would come from a CMS or API
    const newsData = [
        {
            id: 1,
            title: 'Cập nhật phiên bản 2.5.0 - Thêm nhiều tính năng mới',
            excerpt: 'Phiên bản mới mang đến nhiều nghề nghiệp mới, xe cộ mới và cải thiện hiệu suất.',
            category: 'Cập nhật',
            date: '2025-01-15',
            author: 'Admin',
            image: 'https://via.placeholder.com/400x200/e31e24/ffffff?text=Update+2.5.0',
            featured: true
        },
        {
            id: 2,
            title: 'Sự kiện Tết Nguyên Đán 2025',
            excerpt: 'Tham gia sự kiện đặc biệt với nhiều phần thưởng hấp dẫn dịp Tết Nguyên Đán.',
            category: 'Sự kiện',
            date: '2025-01-10',
            author: 'Event Team',
            image: 'https://via.placeholder.com/400x200/8b0000/ffffff?text=Tet+Event+2025'
        },
        {
            id: 3,
            title: 'Hướng dẫn nghề Taxi Driver mới nhất',
            excerpt: 'Tìm hiểu cách trở thành tài xế taxi chuyên nghiệp trong Panda City.',
            category: 'Hướng dẫn',
            date: '2025-01-08',
            author: 'Community',
            image: 'https://via.placeholder.com/400x200/2a2a2a/ffffff?text=Taxi+Guide'
        },
        {
            id: 4,
            title: 'Khai trương khu vực Downtown mới',
            excerpt: 'Khám phá khu vực downtown với nhiều cửa hàng và hoạt động mới.',
            category: 'Tin tức',
            date: '2025-01-05',
            author: 'Development',
            image: 'https://via.placeholder.com/400x200/1a1a1a/ffffff?text=Downtown+Opening'
        },
        {
            id: 5,
            title: 'Cuộc thi Screenshot tháng 1/2025',
            excerpt: 'Tham gia cuộc thi chụp ảnh đẹp nhất để giành giải thưởng giá trị.',
            category: 'Cuộc thi',
            date: '2025-01-03',
            author: 'Community',
            image: 'https://via.placeholder.com/400x200/e31e24/ffffff?text=Screenshot+Contest'
        },
        {
            id: 6,
            title: 'Thông báo bảo trì server định kỳ',
            excerpt: 'Server sẽ được bảo trì vào Chủ nhật hàng tuần từ 2:00 - 4:00 sáng.',
            category: 'Thông báo',
            date: '2025-01-01',
            author: 'Technical Team',
            image: 'https://via.placeholder.com/400x200/8b0000/ffffff?text=Maintenance'
        }
    ];
    
    // Display initial news items (first 3)
    displayNewsItems(newsData.slice(0, 3));
    
    // Store remaining items for load more functionality
    window.remainingNews = newsData.slice(3);
}

function displayNewsItems(newsItems) {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;
    
    newsItems.forEach(item => {
        const newsElement = createNewsElement(item);
        newsGrid.appendChild(newsElement);
    });
}

function createNewsElement(newsItem) {
    const newsElement = document.createElement('article');
    newsElement.className = 'news-item';
    newsElement.innerHTML = `
        <div class="news-image" style="background-image: url('${newsItem.image}')">
            <div class="news-category">${newsItem.category}</div>
        </div>
        <div class="news-content">
            <div class="news-meta">
                <span><i class="fas fa-calendar"></i> ${formatDate(newsItem.date)}</span>
                <span><i class="fas fa-user"></i> ${newsItem.author}</span>
            </div>
            <h3 class="news-title">${newsItem.title}</h3>
            <p class="news-excerpt">${newsItem.excerpt}</p>
            <a href="#" class="news-read-more" onclick="openNewsModal(${newsItem.id})">
                Đọc thêm <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    return newsElement;
}

function setupNewsLoadMore() {
    const loadMoreBtn = document.getElementById('load-more-news');
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', () => {
        if (window.remainingNews && window.remainingNews.length > 0) {
            const nextBatch = window.remainingNews.slice(0, 3);
            displayNewsItems(nextBatch);
            window.remainingNews = window.remainingNews.slice(3);
            
            if (window.remainingNews.length === 0) {
                loadMoreBtn.style.display = 'none';
            }
        }
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function openNewsModal(newsId) {
    // In a real application, this would open a modal or navigate to a detailed page
    alert(`Mở bài viết có ID: ${newsId}\n\nTrong ứng dụng thực tế, đây sẽ mở modal hoặc trang chi tiết bài viết.`);
}

// Performance Optimization
function optimizePerformance() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    preloadCriticalResources();
}

function preloadCriticalResources() {
    // Preload fonts
    const fontLink1 = document.createElement('link');
    fontLink1.rel = 'preload';
    fontLink1.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap';
    fontLink1.as = 'style';
    document.head.appendChild(fontLink1);
    
    const fontLink2 = document.createElement('link');
    fontLink2.rel = 'preload';
    fontLink2.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap';
    fontLink2.as = 'style';
    document.head.appendChild(fontLink2);
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Console Welcome Message
console.log(`
%c🐼 PANDA CITY WEBSITE 🐼
%cWelcome to the Panda City GTA5 FiveM Server website!
Visit us at: connect.pandacity.vn

%cDeveloped with ❤️ for the gaming community
`, 
'color: #e31e24; font-size: 20px; font-weight: bold;',
'color: #ffffff; font-size: 14px;',
'color: #cccccc; font-size: 12px;'
);

// Initialize performance optimizations
optimizePerformance();

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // In a real application, this would send data to Google Analytics or similar
    console.log('Event tracked:', eventName, eventData);
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        const buttonText = e.target.textContent.trim();
        trackEvent('button_click', { button_text: buttonText });
    }
});

// Export functions for global access
window.PandaCity = {
    openNewsModal,
    trackEvent,
    formatDate
};
