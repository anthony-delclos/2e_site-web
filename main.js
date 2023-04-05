const menuBtn = document.querySelector('.menu-btn');
const checkMenu = document.querySelector('#check-mobile_menu');
const mobileProfil = document.querySelector('.mobile-profil_customer');
const checkProfil = document.querySelector('#check-mobile_profil_customer')
menuBtn.addEventListener('click', () => {
  checkProfil.checked = false;
});
mobileProfil.addEventListener('click', () => {
  checkMenu.checked = false;
});