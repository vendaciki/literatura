const Authors = [
    { label: "Alighieri, Dante", href: "../html/autor/Dante-Alighieri.html" },
    { label: "Arbes, Jakub", href: "../html/autor/Jakub-Arbes.html" },
    { label: "Austenová, Jane", href: "../html/autor/Jane-Austenova.html" },
    { label: "Balzac, Honoré de", href: "../html/autor/Honore-de-Balzac.html" },
    { label: "Baudelaire, Charles", href: "../html/autor/Charles-Baudelaire.html" },
    { label: "Boccaccio, Giovanni", href: "../html/autor/Giovanni-Boccaccio.html" },
    { label: "Borovský, Karel Havlíček", href: "../html/autor/K.Havlicek-Borovsky.html" },
    { label: "Bradbury, Ray Douglas", href: "../html/autor/.html" },
    { label: "Brontëová, Charlote", href: "../html/autor/.html" },
    { label: "Byron, George Gordon", href: "../html/autor/George-Gordon-Byron.html" },
    { label: "Camus, Albert", href: "../html/autor/.html" },
    { label: "Coelho, Paulo", href: "../html/autor/.html" },
    { label: "Čapek, Karel", href: "../html/autor/Karel-Capek.html" },
    { label: "Čelakovský, František Ladislav", href: "../html/autor/Frantisek-Celakovsky.html" },
    { label: "Defoe, Daniel", href: "../html/autor/Daniel-Defoe.html" },
    { label: "Dickens, Charles", href: "../html/autor/Charles-Dickens.html" },
    { label: "Dostojevskij, Fjodor Michajlovič", href: "../html/autor/Fjodor-Michajlovic-Dostojevskij.html" },
    { label: "Dumas, Alexandre", href: "../html/autor/Alexandre-Dumas.html"},
    { label: "Dyk, Viktor", href: "../html/autor/.html" },
    { label: "Eco, Umberto", href: "../html/autor/.html" },
    { label: "Erben, Karel Jaromír", href: "../html/autor/.html" },
    { label: "Ezop", href: "../html/autor/Ezop.html" },
    { label: "Felscherinow, Christiane", href: "../html/autor/.html" },
    { label: "Fitzgerald, Francis Scott", href: "../html/autor/F.Scott-Fitzgerald.html" },
    { label: "Flaubert, Gustave", href: "../html/autor/Gustav-Flaubert.html" },
    { label: "Fontaine, Jean de la", href: "../html/autor/Jean-de-La-Fontaine.html" },
    { label: "Franková, Anne", href: "../html/autor/.html" },
    { label: "Fuks, Ladislav", href: "../html/autor/.html" },
    { label: "Gogol, Nikolaj Vasiljevič", href: "../html/autor/Nikolaj-Vasiljevic-Gogol.html" },
    { label: "Goethe, Johann Wolfgang von", href: "../html/autor/J.Wolfgang-Goethe.html" },
    { label: "Green, John", href: "../html/autor/.html" },
    { label: "Hašek, Jaroslav", href: "../html/autor/.html" },
    { label: "Havlíček, Jaroslav", href: "../html/autor/.html" },
    { label: "Hájek, Vítěslav", href: "../html/autor/.html" },
    { label: "Hemingway, Ernest", href: "../html/autor/Ernest-Hemingway.html" },
    { label: "Homér", href: "../html/autor/Homer.html" },
    { label: "Hrabal, Bohumil", href: "../html/autor/.html" },
    { label: "Hugo, Victor", href: "../html/autor/Victor-Hugo.html" },
    { label: "Christie, Agatha", href: "../html/autor/.html" },
    { label: "Jirásek, Alois", href: "../html/autor/Alois-Jirasek.html" },
    { label: "Jirotka, Zdeněk", href: "../html/autor/.html" },
    { label: "John, Radek", href: "../html/autor/.html" },
    { label: "Jungmann, Josef", href: "../html/autor/Josef-Jungmann.html" },
    { label: "Kafka, Franz", href: "../html/autor/.html" },
    { label: "Komenský, Jan Amos", href: "../html/autor/Jan-Amos-Komensky.html" },
    { label: "Kundera, Milan", href: "../html/autor/.html" },
    { label: "Lustig, Arnošt", href: "../html/autor/.html" },
    { label: "Mácha, Karel Hynek", href: "../html/autor/Karel-Hynek-Macha.html" },
    { label: "Maro, Publius Vergilius", href: "../html/autor/Publius-Vergilius-Maro.html" },
    { label: "Maupassant, Guy de", href: "../html/autor/Guy-de-Maupassant.html" },
    { label: "Moliére, Jean-Baptiste Poquelin", href: "../html/autor/Moliere.html" },
    { label: "Moravia, Alberto", href: "../html/autor/.html" },
    { label: "Moyesová, Jojo", href: "../html/autor/.html" },
    { label: "Mrštík, Alois a Vilém", href: "../html/autor/A.V.Mrstikove.html" },
    { label: "Murakami, Haruki", href: "../html/autor/.html" },
    { label: "Naso, Publius Ovidius", href: "../html/autor/Ovidius-Naso.html" },
    { label: "Němcová, Božena", href: "../html/autor/Bozena-Nemcova.html" },
    { label: "Neruda, Jan", href: "../html/autor/Jan-Neruda.html" },
    { label: "Nezval, Vítěslav", href: "../html/autor/.html" },
    { label: "Olbracht, Ivan", href: "../html/autor/.html" },
    { label: "Orwell, George", href: "../html/autor/.html" },
    { label: "Otčenášek, Jan", href: "../html/autor/.html" },
    { label: "Palacký, František", href: "../html/autor/Frantisek-Palacky.html" },
    { label: "Pavel, Ota", href: "../html/autor/.html" },
    { label: "Plautus, Titus Maccius", href: "../html/autor/Titus-Maccius-Plautus.html" },
    { label: "Poe, Edgar Alan", href: "../html/autor/Edgar-Poe.html" },
    { label: "Poláček, Karel", href: "../html/autor/.html" },
    { label: "Puškin, Alexandr Sergejevič", href: "../html/autor/Alexandr-Sergejevic-Puskin.html" },
    { label: "Remarque, Erich Maria", href: "../html/autor/Erich-Maria-Remarque.html" },
    { label: "Rimbaud, Jean Arthur", href: "../html/autor/Jean-Arthur-Rimbaud.html" },
    { label: "Rolland, Romain", href: "../html/autor/.html" },
    { label: "Rowlingová, J. K.", href: "../html/autor/.html" },
    { label: "Saavedra, Miguel de Cervantes y", href: "../html/autor/.html" },
    { label: "Saint-Exupéry, Antoine de", href: "../html/autor/Saint-Exupery.html" },
    { label: "Sapfó", href: "../html/autor/Sapfo.html" },
    { label: "Scott, Walter", href: "../html/autor/Walter-Scott.html" },
    { label: "Shakespeare, William", href: "../html/autor/William-Shakespeare.html" },
    { label: "Shaw, George Bernard", href: "../html/autor/.html" },
    { label: "Sládek, Josef Václav", href: "../html/autor/Josef-Vaclav-Sladek.html" },
    { label: "Sofokles", href: "../html/autor/Sofokles.html" },
    { label: "Steinbeck, John", href: "../html/autor/John-Steinbeck.html" },
    { label: "Styron, William", href: "../html/autor/.html" },
    { label: "Swift, Jonathan", href: "../html/autor/Jonathan-Swift.html" },
    { label: "Škvorecký, Josef", href: "../html/autor/.html" },
    { label: "Tolkien, John Ronald Reuel", href: "../html/autor/.html" },
    { label: "Tolstoj, Lev Nikolajevič", href: "../html/autor/Lev-Nikolajevic-Tolstoj.html" },
    { label: "Tučková, Kateřina", href: "../html/autor/.html" },
    { label: "Tyl, Josef Kajetán", href: "../html/autor/Josef-Kajetan-Tyl.html" },
    { label: "Vančura, Vladislav", href: "../html/autor/.html" },
    { label: "Viewegh, Michal", href: "../html/autor/.html" },
    { label: "Verlaine, Paul", href: "../html/autor/Paul-Verlaine.html" },
    { label: "Voltaire", href: "../html/autor/Voltaire.html" },
    { label: "Vrchlický, Jaroslav", href: "../html/autor/Jaroslav-Vrchlicky.html" },
    { label: "Waltari, Mika", href: "../html/autor/.html" },
    { label: "Whitmann, Walt", href: "../html/autor/Walt-Whitman.html" },
    { label: "Wilde, Oscar", href: "../html/autor/Oscar-Wilde.html" },
    { label: "Zola, Émile", href: "../html/autor/Emile-Zola.html" },
    { label: "Zusak, Markus", href: "../html/autor/.html" },
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