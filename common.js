document.addEventListener('DOMContentLoaded', function() {
    // 手機版菜單控制
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu && mobileMenuClose) {
        // 打開菜單
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });
        
        // 關閉菜單
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
        
        // 點擊菜單項後自動關閉菜單
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // 翻轉卡片的觸摸事件處理
    const flipCards = document.querySelectorAll('.flip-card');
    if (flipCards.length > 0) {
        // 為每個卡片添加點擊/觸摸事件
        flipCards.forEach(card => {
            // 使用觸摸事件處理移動設備
            card.addEventListener('touchend', function(e) {
                // 只在移動設備上執行
                if (window.matchMedia('(max-width: 768px)').matches) {
                    // 阻止默認行為，但不阻止冒泡
                    e.preventDefault();
                    this.classList.toggle('flipped');
                }
            }, {passive: false});
            
            // 保留點擊事件作為備用
            card.addEventListener('click', function(e) {
                // 只在移動設備上執行，並且只處理非觸摸引起的點擊
                if (window.matchMedia('(max-width: 768px)').matches && !window.touchTriggered) {
                    this.classList.toggle('flipped');
                }
            });
        });
        
        // 設置全局標記，用於區分觸摸和鼠標事件
        window.addEventListener('touchstart', function() {
            window.touchTriggered = true;
        });
        
        window.addEventListener('mousedown', function() {
            window.touchTriggered = false;
        });
    }
    
    // 手風琴效果控制 (僅用於lindyhop.html)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                content.classList.toggle('active');
            });
        });
    }
});