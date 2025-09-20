const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// ハンバーガークリックで開閉
function toggleMenu(event){
    event.stopPropagation();
    mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
}

// メニュー外クリックで閉じる
document.addEventListener('click', function(e){
    if(mobileMenu.style.display === 'flex' && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)){
        mobileMenu.style.display = 'none';
    }
});
