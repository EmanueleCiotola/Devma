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
    console.log(navSections);
    console.log(navLinks);
    console.log(currentNavSectionIndex);
    navSections.forEach((section, index) => {
        if (window.pageYOffset + (document.body.scrollHeight * 0.12) >= section.offsetTop) currentNavSectionIndex = index; //TODO da rivedere. Fa schifo
    });
    navLinks.forEach((link, index) => {
        link.classList.toggle("active", index === currentNavSectionIndex);
    });
}

window.addEventListener("scroll", () => {
    closeMenu(); // chiudi il menu per i dispositivi piccoli se è mostrato
    scrolling();
});



// gestione della navbar per i dispositivi piccoli
isMenuShown = false;
header = document.getElementById("header");
menu = document.getElementById("header__menu");
//! icon = document.getElementById("header__iconaMenu");
pageContent = document.getElementById("pageContent");
function toggleMenu() {
    isMenuShown = !isMenuShown;
    header.classList.toggle("header__menu--open");
    menu.classList.toggle("header__menu--open");
    pageContent.classList.toggle("header__menu--open");
}
function closeMenu() {
    if (isMenuShown == true) {
        isMenuShown = false;
        header.classList.remove("header__menu--open");
        menu.classList.remove("header__menu--open");
        pageContent.classList.remove("header__menu--open");
    }
}
function screenResize() { if (window.innerWidth >= 450) closeMenu(); }
pageContent.addEventListener('mousedown', closeMenu, {passive: true});
pageContent.addEventListener('touchstart', closeMenu, {passive: true});
window.addEventListener("scroll", () => {closeMenu(); scrolling();}, {passive: true});
window.addEventListener("resize", screenResize, {passive: true});