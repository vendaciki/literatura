$(document).ready(function() {
    // Data pro první sekci menu
    const Data = [
        { label: "Literární druhy", href: "../html/lit-druh.html", iconClass: "fas fa-book" },
        { label: "Literární žánry", href: "../html/lit-zanr.html", iconClass: "fas fa-bookmark" },
        { label: "Literární směry", href: "../html/lit-smer.html", iconClass: "fas fa-paper-plane" },
        { label: "Téma, motivy a kompozice", href: "../html/tema-motivy.html", iconClass: "fas fa-comment" },
        { label: "Figury a Tropy", href: "../html/figury-tropy.html", iconClass: "fas fa-puzzle-piece" },
        { label: "Vypravěč", href: "../html/vypravec.html", iconClass: "fas fa-user-circle" },
        { label: "Povinná četba", href: "../html/povinna-cetba.html", iconClass: "fas fa-book-open" },
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

    // Vytvoření sekce menu
    createMenuItems(Data, menuItemsContainer);
   
});    