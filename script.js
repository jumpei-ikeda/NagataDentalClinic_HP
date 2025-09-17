const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;

// ハンバーガークリックで開閉
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        body.classList.remove("menu-open");
    } else {
        mobileMenu.style.display = "block"; // 表示
        body.classList.add("menu-open");
    }
});

// メニュー外クリックで閉じる
document.addEventListener("click", (e) => {
    if (mobileMenu.style.display === "block" && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.style.display = "none";
        body.classList.remove("menu-open");
    }
});

// メニュー上でスクロールする際、ページ全体のスクロールを止める
function stopScroll(e) {
    const scrollTop = mobileMenu.scrollTop;
    const scrollHeight = mobileMenu.scrollHeight;
    const offsetHeight = mobileMenu.offsetHeight;
    const delta = e.deltaY || 0;

    if ((delta > 0 && scrollTop + offsetHeight >= scrollHeight) ||
        (delta < 0 && scrollTop <= 0)) {
        e.preventDefault();
    }
}

// PC：wheel イベント
mobileMenu.addEventListener('wheel', stopScroll, { passive: false });

// スマホ：touchmove イベント
mobileMenu.addEventListener('touchmove', stopScroll, { passive: false });

// ここから追加部分：慣性中でも一回のタッチでメニュー操作
mobileMenu.addEventListener('touchstart', (e) => {
    // ボディの慣性スクロールを強制停止
    body.style.overflow = 'hidden';
}, { passive: true });

mobileMenu.addEventListener('touchmove', (e) => {
    // メニュー内スクロールにフォーカスさせる
    e.stopPropagation();
}, { passive: false });

mobileMenu.addEventListener('touchend', () => {
    // メニュー操作終了後、ボディスクロールを元に戻す
    body.style.overflow = '';
});