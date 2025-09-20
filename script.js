const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

// ハンバーガークリックで開閉
hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
        body.style.overflow = ''; // ボディスクロールを戻す
    } else {
        mobileMenu.style.display = 'flex';
        body.style.overflow = 'hidden'; // メニュー表示中はボディスクロール禁止
    }
});

// メニュー外クリックで閉じる
document.addEventListener('click', (e) => {
    if(mobileMenu.style.display === 'flex' && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)){
        mobileMenu.style.display = 'none';
        body.style.overflow = ''; // ボディスクロールを戻す
    }
});

// メニュー内スクロール時のボディスクロール禁止（PC：wheel）
mobileMenu.addEventListener('wheel', (e) => {
    const scrollTop = mobileMenu.scrollTop;
    const scrollHeight = mobileMenu.scrollHeight;
    const offsetHeight = mobileMenu.offsetHeight;
    const delta = e.deltaY;

    // メニューのスクロールが上限・下限に達している場合、ボディに伝わらないようにする
    if ((delta > 0 && scrollTop + offsetHeight >= scrollHeight) ||
        (delta < 0 && scrollTop <= 0)) {
        e.preventDefault();
    }
}, { passive: false });

// メニュー内スクロール時のボディスクロール禁止（スマホ：touchmove）
mobileMenu.addEventListener('touchmove', (e) => {
    e.stopPropagation(); // ボディにスクロールを伝えない
}, { passive: false });

// メニュー操作中はタッチ開始でボディスクロール停止
mobileMenu.addEventListener('touchstart', () => {
    body.style.overflow = 'hidden';
});

// メニュー操作終了でボディスクロールを戻す
mobileMenu.addEventListener('touchend', () => {
    if (mobileMenu.style.display !== 'flex') {
        body.style.overflow = '';
    }
});
