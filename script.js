const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// 開閉
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// メニュー内スクロールを本文に伝播させない
mobileMenu.addEventListener("touchmove", (e) => {
  e.stopPropagation(); // メニュー内スクロール中は本文が動かない
}, { passive: false });
