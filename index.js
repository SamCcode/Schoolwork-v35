

const validPaths = '/home.html';

    const checkURLPath = () => {
        const currentPath = window.location.pathname;
        if (!validPaths.includes(currentPath)) {
            redirectToErrorPage();
        }
    };

    const redirectToErrorPage = () => {
        window.location.href = "error.html";
    };

    window.onload = checkURLPath;




    // script.js
  // script.js
const navLinks = document.querySelector('.nav-links');
const mobileMenuButton = document.querySelector('.mobile-menu-button');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});