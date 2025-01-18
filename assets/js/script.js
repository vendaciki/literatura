$(document).ready(function () {
    // Data pro první sekci menu
    const MenuData = [
        { label: "Literární druhy", href: "../../html/lit-druh.html", iconClass: "fas fa-book" },
        { label: "Literární žánry", href: "../../html/lit-zanr.html", iconClass: "fas fa-bookmark" },
        { label: "Literární směry", href: "../../html/lit-smer.html", iconClass: "fas fa-paper-plane" },
        { label: "Poezie a Próza", href: "../../html/poezie-proza.html", iconClass: "fas fa-star" },
        { label: "Téma, motivy a kompozice", href: "../../html/tema-motivy.html", iconClass: "fas fa-comment" },
        { label: "Figury a Tropy", href: "../../html/figury-tropy.html", iconClass: "fas fa-puzzle-piece" },
        { label: "Vypravěč", href: "../../html/vypravec.html", iconClass: "fas fa-user-circle" },
        { label: "Jazyk", href: "../../html/jazyk.html", iconClass: "fas fa-pen-nib" },
        { label: "Povinná četba", href: "../../html/povinna-cetba.html", iconClass: "fas fa-book-open" },
        { label: "Autoři", href: "../../html/authors.html", iconClass: "fas fa-pencil-alt" },
    ];

    // Data pro literární směry
    const LitSmeryData = [
        { label: "Starověká literatura", href: "starovek.html", iconClass: "fas fa-book-reader" },
        { label: "Antická literatura", href: "antika.html", iconClass: "fas fa-theater-masks" },
        { label: "Středověká literatura", href: "stredovek.html", iconClass: "fas fa-feather-alt" },
        { label: "Renesance a Humanismus", href: "renesance.html", iconClass: "fas fa-palette" },
        { label: "Baroko", href: "baroko.html", iconClass: "fas fa-mask" },
        { label: "Klasicismus", href: "klasicismus.html", iconClass: "fas fa-archway" },
        { label: "Osvícenství", href: "osvicenstvi.html", iconClass: "fas fa-lightbulb" },
        { label: "Preromantismus", href: "preromantismus.html", iconClass: "fas fa-magic" },
        { label: "Národní obrození", href: "obrozeni.html", iconClass: "fas fa-flag" },
        { label: "Romantismus", href: "romantismus.html", iconClass: "fas fa-dove" },
        { label: "Realismus", href: "realismus.html", iconClass: "fas fa-book-open" },
        { label: "Socialistický realismus", href: "socialismus.html", iconClass: "fas fa-user" },
        { label: "Naturalismus", href: "naturalismus.html", iconClass: "fas fa-search" },
        { label: "Česká lit. 2. poloviny 19. století", href: "ceska19stol.html", iconClass: "fas fa-glasses" },
        { label: "Literární moderna", href: "moderna.html", iconClass: "fas fa-paper-plane" },
        { label: "Literatura 1. pol. 20. století", href: "1pol20stol.html", iconClass: "fas fa-marker" },
        { label: "Literatura 2. pol. 20. století", href: "2pol20stol.html", iconClass: "fas fa-marker" }
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

    // Funkce pro vytvoření položek literárních směrů
    function createLitSmeryItems(menuData, parentElement) {
        menuData.forEach(item => {
            const smerItem = document.createElement('p');
            const smerLink = document.createElement('a');
            const iconElement = document.createElement('i');

            smerLink.textContent = item.label;
            smerLink.href = item.href;

            // Přidání třídy pro ikonu Font Awesome
            iconElement.setAttribute('class', item.iconClass);

            // Přidání ikony jako potomka odkazu
            smerLink.prepend(iconElement);

            smerItem.appendChild(smerLink);

            parentElement.appendChild(smerItem);
        });
    }

    // Vytvoření první sekce menu
    const menuItemsContainer = document.getElementById('menu-items');
    if (menuItemsContainer) {
        createMenuItems(MenuData, menuItemsContainer);
    }

    // Vytvoření položek literárních směrů
    const smeryContainer = document.querySelector('.smery');
    if (smeryContainer) {
        createLitSmeryItems(LitSmeryData, smeryContainer);
    }
});

// Funkce pro zamezení kontextového menu
function disableRightClick(event) {
    event.preventDefault();
}

// Připojení události na načtení stránky
window.onload = function () {
    document.addEventListener("contextmenu", disableRightClick);
};
