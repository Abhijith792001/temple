/**
 * Main Website JavaScript
 * Handles language switching, mobile menu, photo gallery lightbox, and Lucide icons initialization.
 */

function setLang(lang) {
    if (lang === 'ml') {
        document.documentElement.classList.add('lang-ml');
        var btnEn = document.getElementById('btn-en');
        var btnMl = document.getElementById('btn-ml');
        if (btnEn && btnMl) {
            btnEn.classList.remove('bg-theme-maroon', 'text-white', 'shadow-sm');
            btnEn.classList.add('text-slate-700', 'hover:bg-slate-200');
            btnMl.classList.add('bg-theme-maroon', 'text-white', 'shadow-sm');
            btnMl.classList.remove('text-slate-700', 'hover:bg-slate-200');
        }
    } else {
        document.documentElement.classList.remove('lang-ml');
        var btnEn = document.getElementById('btn-en');
        var btnMl = document.getElementById('btn-ml');
        if (btnEn && btnMl) {
            btnMl.classList.remove('bg-theme-maroon', 'text-white', 'shadow-sm');
            btnMl.classList.add('text-slate-700', 'hover:bg-slate-200');
            btnEn.classList.add('bg-theme-maroon', 'text-white', 'shadow-sm');
            btnEn.classList.remove('text-slate-700', 'hover:bg-slate-200');
        }
    }
    localStorage.setItem('temple_lang', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    var savedLang = localStorage.getItem('temple_lang');
    if (savedLang === 'ml') {
        setLang('ml');
    }
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

function toggleMobileMenu() {
    var menu = document.getElementById('mobile-menu');
    var icon = document.getElementById('mobile-menu-icon');
    if (!menu) return;
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        if (icon) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    } else {
        menu.classList.add('hidden');
        if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    }
}

function openLightbox(imgUrl, caption) {
    var modal = document.getElementById('lightbox-modal');
    var img = document.getElementById('lightbox-img');
    var cap = document.getElementById('lightbox-caption');
    if (!modal || !img) return;
    
    img.src = imgUrl;
    if (cap) cap.innerText = caption || '';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    var modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeLightbox();
        });
    }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeLightbox();
    });
});
