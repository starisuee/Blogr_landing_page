// JavaScript para el Menú Desplegable

function toggleSubMenu(li) {
    const submenu = li.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
    }
  }
  