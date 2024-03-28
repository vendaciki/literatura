$(document).ready(function() {
    // Data pro první sekci menu
    const firstSectionData = [
        { label: "Literární druhy", href: "../html/lit-druhy.html", iconClass: "fas fa-book" },
        { label: "Literární žánry", href: "../html/lit-zanry.html", iconClass: "fas fa-bookmark" },
        { label: "Rozbor díla", href: "../html/rozbor.html", iconClass: "fas fa-edit" },
        
    ];

    // Data pro druhou sekci menu
    const secondSectionData = [
        { label: "Starověká literatura", href: "../html/starovek.html", iconClass: "fas fa-book-reader" },
        { label: "Antická literatura", href: "../html/antika.html", iconClass: "fas fa-theater-masks" },
        { label: "Středověká literatura", href: "../html/stredovek.html", iconClass: "fas fa-feather-alt" },
        { label: "Renesance a Humanismus", href: "../html/renesance.html", iconClass: "fas fa-palette" },
        { label: "Baroko", href: "../html/baroko.html", iconClass: "fas fa-mask" },
        { label: "Klasicismus", href: "../html/klasicismus.html", iconClass: "fas fa-archway" },
        { label: "Osvícenství", href: "../html/osvicenstvi.html", iconClass: "fas fa-lightbulb" },
        { label: "Preromantismus", href: "../html/preromantismus.html", iconClass: "fas fa-magic" },
        { label: "Národní obrození", href: "../html/obrozeni.html", iconClass: "fas fa-flag" },
        { label: "Romantismus", href: "../html/romantismus.html", iconClass: "fas fa-dove" },
        { label: "Realismus", href: "../html/realismus.html", iconClass: "fas fa-book-open" },
        { label: "Socialistický realismus", href: "../html/socialismus.html", iconClass: "fas fa-user" },
        { label: "Naturalismus", href: "../html/naturalismus.html", iconClass: "fas fa-search" },
        { label: "Česká lit. 2. poloviny 19. století", href: "../html/ceska19stol.html", iconClass: "fas fa-glasses" },
        { label: "Literární moderna", href: "../html/moderna.html", iconClass: "fas fa-paper-plane" },
        { label: "Literatura 1. pol. 20. století", href: "../html/1pol20stol.html", iconClass: "fas fa-marker" },
        { label: "Literatura 2. pol. 20. století", href: "../html/2pol20stol.html", iconClass: "fas fa-marker" }
    ];

    // Funkce pro vytvoření položek menu
    function createMenuItems(menuData, parentElement) {
        menuData.forEach(item => {
            const menuItem = document.createElement('li');
            const menuItemLink = document.createElement('a');
            const iconElement = document.createElement('i');
    
            menuItemLink.textContent = item.label;
            menuItemLink.href = item.href;
    
            // Přidání třídy pro ikonu Font Awesome
            iconElement.setAttribute('class', item.iconClass);
    
            // Přidání ikony jako potomka odkazu
            menuItemLink.prepend(iconElement);
    
            menuItem.appendChild(menuItemLink);
    
            parentElement.appendChild(menuItem);
        });
    }
    
    const menuItemsContainer = document.getElementById('menu-items');

    // Vytvoření první sekce menu
    createMenuItems(firstSectionData, menuItemsContainer);
    
    // Přidání oddělovače mezi první a druhou sekci
    const hrElement = document.createElement('hr');
    menuItemsContainer.appendChild(hrElement);

    // Vytvoření druhé sekce menu
    createMenuItems(secondSectionData, menuItemsContainer);
   
});    