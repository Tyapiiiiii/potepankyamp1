// ハンバーガーメニューのトグル
(function(){
    const btn = document.querySelector('.hamburger');
    const mobile = document.getElementById('mobile-nav');
    btn && btn.addEventListener('click', function(){
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        btn.classList.toggle('open', !open);
        mobile.classList.toggle('open', !open);
        mobile.setAttribute('aria-hidden', String(open));
    });
})();
