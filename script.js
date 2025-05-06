document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Kiểm tra xem navbar đang mở và màn hình có kích thước md trở xuống hay không
            const isCollapsed = !navbarCollapse.classList.contains('show');
            const isMdOrLess = window.innerWidth <= 768; // Bootstrap breakpoint for md

            if (!isCollapsed && isMdOrLess) {
                navbarToggler.click(); // Simulate a click on the toggler button
            }
        });
    });
});