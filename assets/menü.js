document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const navList = document.getElementById('navList');
    const navLinks = document.querySelectorAll('.nav__link');

    // Menü ikonuna tıklandığında menüyü aç/kapat
    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Menü öğelerine tıklandığında menüyü kapat
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
});