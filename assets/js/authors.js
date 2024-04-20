const Authors = [
    { label: "Austenová, Jane ", href: "../html/.html" },
    { label: "Balzac, Honoré de ", href: "../html/.html" },
    { label: "Boccaccio, Giovanni ", href: "../html/.html" },
    { label: "Borovský, Karel Havlíček ", href: "../html/.html" },
    { label: "Bradbury, Ray Douglas ", href: "../html/.html" },
    { label: "Brontëová, Charlote ", href: "../html/.html" },
    { label: "Camus, Albert ", href: "../html/.html" },
    { label: "Coelho, Paulo ", href: "../html/.html" },
    { label: "Čapek, Karel", href: "../html/Capek.html" },
    { label: "Dickens, Charles ", href: "../html/.html" },
    { label: "Dostojevskij, Fjodor Michajlovič ", href: "../html/.html" },
    { label: "Dyk, Viktor ", href: "../html/.html" },
    { label: "Eco, Umberto ", href: "../html/.html" },
    { label: "Erben, Karel Jaromír ", href: "../html/.html" },
    { label: "Ezop", href: "../html/.html" },
    { label: "Felscherinow, Christiane", href: "../html/.html" },
    { label: "Fitzgerald, Francis Scott ", href: "../html/.html" },
    { label: "Flaubert, Gustave ", href: "../html/.html" },
    { label: "Franková, Anne ", href: "../html/.html" },
    { label: "Fuks, Ladislav ", href: "../html/.html" },
    { label: "Gogol, Nikolaj Vasiljevič ", href: "../html/.html" },
    { label: "Green, John ", href: "../html/.html" },
    { label: "Hašek, Jaroslav ", href: "../html/.html" },
    { label: "Havlíček, Jaroslav ", href: "../html/.html" },
    { label: "Hemingway, Ernest", href: "../html/Hemingway.html" },
    { label: "Homér", href: "../html/Homer.html" },
    { label: "Hrabal, Bohumil", href: "../html/.html" },
    { label: "Hugo, Victor", href: "../html/.html" },
    { label: "Christie, Agatha ", href: "../html/.html" },
    { label: "Jirotka, Zdeněk ", href: "../html/.html" },
    { label: "John, Radek", href: "../html/.html" },
    { label: "Kafka, Franz ", href: "../html/.html" },
    { label: "Komenský, Jan Amos ", href: "../html/.html" },
    { label: "Kundera, Milan", href: "../html/.html" },
    { label: "Lustig, Arnošt ", href: "../html/.html" },
    { label: "Mácha, Karel Hynek ", href: "../html/.html" },
    { label: "Maro, Publius Vergilius", href: "../html/.html" },
    { label: "Maupassant, Guy de ", href: "../html/.html" },
    { label: "Moliére, Jean-Baptiste Poquelin ", href: "../html/.html" },
    { label: "Moravia, Alberto ", href: "../html/.html" },
    { label: "Moyesová, Jojo ", href: "../html/.html" },
    { label: "Mrštík, Alois a Vilém ", href: "../html/.html" },
    { label: "Murakami, Haruki ", href: "../html/.html" },
    { label: "Naso, Publius Ovidius", href: "../html/Naso.html" },
    { label: "Němcová, Božena", href: "../html/.html" },
    { label: "Neruda, Jan ", href: "../html/.html" },
    { label: "Nezval, Vítěslav ", href: "../html/.html" },
    { label: "Olbracht, Ivan ", href: "../html/.html" },
    { label: "Orwell, George", href: "../html/.html" },
    { label: "Otčenášek, Jan ", href: "../html/.html" },
    { label: "Pavel, Ota ", href: "../html/.html" },
    { label: "Plautus, Titus Maccius", href: "../html/Plautus.html" },
    { label: "Poe, Edgar Alan", href: "../html/Edgar-Poe.html" },
    { label: "Poláček, Karel ", href: "../html/.html" },
    { label: "Puškin, Alexandr Sergejevič", href: "../html/Puskin.html" },
    { label: "Remarque, Erich Maria", href: "../html/Remarque.html" },
    { label: "Rolland, Romain ", href: "../html/.html" },
    { label: "Rowlingová, J. K. ", href: "../html/.html" },
    { label: "Saavedra, Miguel de Cervantes y ", href: "../html/.html" },
    { label: "Saint-Exupéry, Antoine de", href: "../html/Saint-Exupery.html" },
    { label: "Shakespeare, William ", href: "../html/.html" },
    { label: "Shaw, George Bernard ", href: "../html/.html" },
    { label: "Sofokles", href: "../html/Sofokles.html" },
    { label: "Steinbeck, John ", href: "../html/.html" },
    { label: "Styron, William ", href: "../html/.html" },
    { label: "Škvorecký, Josef ", href: "../html/.html" },
    { label: "Tolkien, John Ronald Reuel ", href: "../html/.html" },
    { label: "Tolstoj, Lev Nikolajevič ", href: "../html/.html" },
    { label: "Tučková, Kateřina", href: "../html/.html" },
    { label: "Tyl, Josef Kajetán ", href: "../html/.html" },
    { label: "Vančura, Vladislav ", href: "../html/.html" },
    { label: "Viewegh, Michal", href: "../html/.html" },
    { label: "Vrchlický, Jaroslav ", href: "../html/.html" },
    { label: "Waltari, Mika ", href: "../html/.html" },
    { label: "Wilde, Oskar ", href: "../html/.html" },
    { label: "Zola, Émile ", href: "../html/.html" },
    { label: "Zusak, Markus ", href: "../html/.html" },
    // { label: "", href: "../html/.html" },

];

// Seřazení pole autorů abecedně podle jejich jmen
Authors.sort((a, b) => a.label.localeCompare(b.label));

// Získání odkazu na <ul> element
const menuAuthors = document.getElementById('menu-authors');

// Procházení seřazeného pole Authors a vytváření položek seznamu
Authors.forEach(author => {
    // Vytvoření prvku <li>
    const listItem = document.createElement('li');

    // Vytvoření odkazu <a>
    const link = document.createElement('a');
    link.href = author.href; // Nastavení atributu href
    link.textContent = author.label; // Nastavení textového obsahu

    // Přidání odkazu do prvku <li>
    listItem.appendChild(link);

    // Přidání prvku <li> do <ul>
    menuAuthors.appendChild(listItem);
});