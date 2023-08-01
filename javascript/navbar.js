// gestione dei collegamenti della navbar
function goTo(daAttivare) {
    closeMenu();
    const targetSection = document.getElementById(daAttivare + "Page");
    window.scroll({
        top: targetSection.offsetTop - (4 * parseFloat(getComputedStyle(document.documentElement).fontSize)),
    });    
}



// gestione dello scroll
const navSections = document.querySelectorAll("#homePage, #portfolioPage, #socialPage, #contattiPage");
const navLinks = document.querySelectorAll("#header__menu a");
let currentNavSectionIndex = 0;
function scrolling() {
    navSections.forEach((section, index) => {
        if (window.pageYOffset + (document.body.scrollHeight * 0.12) >= section.offsetTop) currentNavSectionIndex = index; //TODO da rivedere. Fa schifo
    });
    navLinks.forEach((link, index) => {
        link.classList.toggle("active", index === currentNavSectionIndex);
    });
}



// gestione della navbar per i dispositivi piccoli
isMenuShown = false;
const header = document.getElementById("header");
const menu = document.getElementById("header__menu");
const modalPopUp = document.getElementById("modalPopUp");
function toggleMenu() {
    isMenuShown = !isMenuShown;
    header.classList.toggle("header__menu--open");
    menu.classList.toggle("header__menu--open");
    modalPopUp.classList.toggle("modalPopUp--open");
}
function closeMenu() {
    if (isMenuShown == true) {
        isMenuShown = false;
        header.classList.remove("header__menu--open");
        menu.classList.remove("header__menu--open");
        modalPopUp.classList.remove("modalPopUp--open");
    }
}
function screenResize() { if (window.innerWidth >= 450) closeMenu(); }
modalPopUp.addEventListener('mousedown', closeMenu, {passive: true});
modalPopUp.addEventListener('touchstart', closeMenu, {passive: true});



// event listeners
window.addEventListener("scroll", () => {closeMenu(); scrolling();}, {passive: true});
window.addEventListener("resize", screenResize, {passive: true});