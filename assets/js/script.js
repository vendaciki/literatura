$(document).ready(function() {
    // Data pro první sekci menu
    const Data = [
        { label: "Literární druhy", href: "../html/lit-druh.html", iconClass: "fas fa-book" },
        { label: "Literární žánry", href: "../html/lit-zanr.html", iconClass: "fas fa-bookmark" },
        { label: "Literární směry", href: "../html/lit-smer.html", iconClass: "fas fa-paper-plane" },
        { label: "Figury a Tropy", href: "../html/figury-tropy.html", iconClass: "fas fa-puzzle-piece" },

        { label: "Rozbor díla", href: "../html/rozbor.html", iconClass: "fas fa-edit" },
        
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
    createMenuItems(Data, menuItemsContainer);

    // Vytvoření druhé sekce menu
    createMenuItems( menuItemsContainer);
   
});    

var startY;
var threshold = 100; // Minimální vzdálenost potřebná pro obnovu stránky

document.addEventListener('touchstart', function(e) {
    var touch = e.touches[0];
    startY = touch.clientY;
});

document.addEventListener('touchmove', function(e) {
    if (!startY) return;
    var touch = e.touches[0];
    var deltaY = touch.clientY - startY;

    // Pokud je vzdálenost pohybu prstu dolů větší než prahová hodnota, provedeme obnovení stránky
    if (deltaY > threshold) {
        location.reload();
    }
});