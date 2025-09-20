const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// 開閉
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// メニュー外クリックで閉じる
document.addEventListener("click", (e) => {
  if (mobileMenu.classList.contains("show") &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)) {
    mobileMenu.classList.remove("show");
  }
});

// メニュー内スクロール処理
mobileMenu.addEventListener("touchstart", function(e) {
  const scrollTop = this.scrollTop;
  const scrollHeight = this.scrollHeight;
  const offsetHeight = this.offsetHeight;
  const contentHeight = scrollHeight - offsetHeight;

  if (contentHeight <= 0) return;

  if (scrollTop === 0) this.scrollTop = 1;
  else if (scrollTop === contentHeight) this.scrollTop = contentHeight - 1;
}, { passive: false });

mobileMenu.addEventListener("touchmove", function(e) {
  e.stopPropagation(); // メニュー内のスクロールだけ独立
}, { passive: false });
