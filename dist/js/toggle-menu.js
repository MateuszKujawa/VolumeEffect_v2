const mobile_icon = document.getElementById('mobile-icon');
const mobile_menu = document.getElementById('mobile-menu');
const hamburger_icon = document.querySelector("#mobile-icon i");
const menu_links = document.querySelectorAll("#mobile-menu li");

function openCloseMenu() {
  mobile_menu.classList.toggle('block');
  mobile_menu.classList.toggle('active');
  
  // Pobierz element body
  const body = document.body;
  
  // Sprawdź, czy menu jest otwarte
  if (mobile_menu.classList.contains('active')) {
    // Jeśli tak, wyłącz overflow-y
    body.style.overflowY = 'hidden';
  } else {
    // Jeśli nie, przywróć overflow-y
    body.style.overflowY = 'auto'; // lub 'visible', w zależności od preferencji
  }
}

function changeIcon(icon) {
  icon.classList.toggle("fa-xmark");
}

function closeMenu() {
  mobile_menu.classList.remove('block');
  mobile_menu.classList.remove('active');
  
  // Przywróć overflow-y po zamknięciu menu
  document.body.style.overflowY = 'auto'; // lub 'visible', w zależności od preferencji
}

mobile_icon.addEventListener('click', openCloseMenu);

menu_links.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
