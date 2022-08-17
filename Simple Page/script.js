const hamburgerButton = document.getElementById('hamburger-button');
const closeButton = document.getElementById('close-button');

const sidebar = document.getElementsByClassName('sidebar')[0];

hamburgerButton.addEventListener('click', func => {
    sidebar.classList.toggle('sidebar-on');
    hamburgerButton.classList.toggle('header-hamburger-button-on');
});

closeButton.addEventListener('click', func => {
    sidebar.classList.toggle('sidebar-on');
    hamburgerButton.classList.toggle('header-hamburger-button-on');
});