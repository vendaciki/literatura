const Authors = [
    { label: "Austenová, Jane ", href: "../html/autor/.html" },
    { label: "Balzac, Honoré de ", href: "../html/autor/.html" },
    { label: "Boccaccio, Giovanni ", href: "../html/autor/Giovanni-Boccaccio.html" },
    { label: "Borovský, Karel Havlíček ", href: "../html/autor/.html" },
    { label: "Bradbury, Ray Douglas ", href: "../html/autor/.html" },
    { label: "Brontëová, Charlote ", href: "../html/autor/.html" },
    { label: "Camus, Albert ", href: "../html/autor/.html" },
    { label: "Coelho, Paulo ", href: "../html/autor/.html" },
    { label: "Čapek, Karel", href: "../html/autor/Capek.html" },
    { label: "Dickens, Charles ", href: "../html/autor/.html" },
    { label: "Dostojevskij, Fjodor Michajlovič ", href: "../html/autor/.html" },
    { label: "Dyk, Viktor ", href: "../html/autor/.html" },
    { label: "Eco, Umberto ", href: "../html/autor/.html" },
    { label: "Erben, Karel Jaromír ", href: "../html/autor/.html" },
    { label: "Ezop", href: "../html/autor/Ezop.html" },
    { label: "Felscherinow, Christiane", href: "../html/autor/.html" },
    { label: "Fitzgerald, Francis Scott ", href: "../html/autor/F.Scott-Fitzgerald.html" },
    { label: "Flaubert, Gustave ", href: "../html/autor/.html" },
    { label: "Franková, Anne ", href: "../html/autor/.html" },
    { label: "Fuks, Ladislav ", href: "../html/autor/.html" },
    { label: "Gogol, Nikolaj Vasiljevič ", href: "../html/autor/.html" },
    { label: "Green, John ", href: "../html/autor/.html" },
    { label: "Hašek, Jaroslav ", href: "../html/autor/.html" },
    { label: "Havlíček, Jaroslav ", href: "../html/autor/.html" },
    { label: "Hemingway, Ernest", href: "../html/autor/Hemingway.html" },
    { label: "Homér", href: "../html/autor/Homer.html" },
    { label: "Hrabal, Bohumil", href: "../html/autor/.html" },
    { label: "Hugo, Victor", href: "../html/autor/.html" },
    { label: "Christie, Agatha ", href: "../html/autor/.html" },
    { label: "Jirotka, Zdeněk ", href: "../html/autor/.html" },
    { label: "John, Radek", href: "../html/autor/.html" },
    { label: "Kafka, Franz ", href: "../html/autor/.html" },
    { label: "Komenský, Jan Amos ", href: "../html/autor/Jan-Amos-Komensky.html" },
    { label: "Kundera, Milan", href: "../html/autor/.html" },
    { label: "Lustig, Arnošt ", href: "../html/autor/.html" },
    { label: "Mácha, Karel Hynek ", href: "../html/autor/Macha.html" },
    { label: "Maro, Publius Vergilius", href: "../html/autor/Maro.html" },
    { label: "Maupassant, Guy de ", href: "../html/autor/.html" },
    { label: "Moliére, Jean-Baptiste Poquelin ", href: "../html/autor/Moliere.html" },
    { label: "Moravia, Alberto ", href: "../html/autor/.html" },
    { label: "Moyesová, Jojo ", href: "../html/autor/.html" },
    { label: "Mrštík, Alois a Vilém ", href: "../html/autor/.html" },
    { label: "Murakami, Haruki ", href: "../html/autor/.html" },
    { label: "Naso, Publius Ovidius", href: "../html/autor/Naso.html" },
    { label: "Němcová, Božena", href: "../html/autor/.html" },
    { label: "Neruda, Jan ", href: "../html/autor/.html" },
    { label: "Nezval, Vítěslav ", href: "../html/autor/.html" },
    { label: "Olbracht, Ivan ", href: "../html/autor/.html" },
    { label: "Orwell, George", href: "../html/autor/.html" },
    { label: "Otčenášek, Jan ", href: "../html/autor/.html" },
    { label: "Pavel, Ota ", href: "../html/autor/.html" },
    { label: "Plautus, Titus Maccius", href: "../html/autor/Plautus.html" },
    { label: "Poe, Edgar Alan", href: "../html/autor/Edgar-Poe.html" },
    { label: "Poláček, Karel ", href: "../html/autor/.html" },
    { label: "Puškin, Alexandr Sergejevič", href: "../html/autor/Puskin.html" },
    { label: "Remarque, Erich Maria", href: "../html/autor/Remarque.html" },
    { label: "Rolland, Romain ", href: "../html/autor/.html" },
    { label: "Rowlingová, J. K. ", href: "../html/autor/.html" },
    { label: "Saavedra, Miguel de Cervantes y ", href: "../html/autor/.html" },
    { label: "Saint-Exupéry, Antoine de", href: "../html/autor/Saint-Exupery.html" },
    { label: "Sapfó", href: "../html/autor/Sapfo.html" },
    { label: "Shakespeare, William ", href: "../html/autor/Shakespeare.html" },
    { label: "Shaw, George Bernard ", href: "../html/autor/.html" },
    { label: "Sofokles", href: "../html/autor/Sofokles.html" },
    { label: "Steinbeck, John ", href: "../html/autor/.html" },
    { label: "Styron, William ", href: "../html/autor/.html" },
    { label: "Škvorecký, Josef ", href: "../html/autor/.html" },
    { label: "Tolkien, John Ronald Reuel ", href: "../html/autor/.html" },
    { label: "Tolstoj, Lev Nikolajevič ", href: "../html/autor/.html" },
    { label: "Tučková, Kateřina", href: "../html/autor/.html" },
    { label: "Tyl, Josef Kajetán ", href: "../html/autor/.html" },
    { label: "Vančura, Vladislav ", href: "../html/autor/.html" },
    { label: "Viewegh, Michal", href: "../html/autor/.html" },
    { label: "Vrchlický, Jaroslav ", href: "../html/autor/.html" },
    { label: "Waltari, Mika ", href: "../html/autor/.html" },
    { label: "Wilde, Oskar ", href: "../html/autor/.html" },
    { label: "Zola, Émile ", href: "../html/autor/.html" },
    { label: "Zusak, Markus ", href: "../html/autor/.html" },
    // { label: "", href: "../html/autor/.html" },

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