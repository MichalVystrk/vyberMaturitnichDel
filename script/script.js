// Data - Cvičná data (snadno zaměnitelná)
    const books = {
    category1: [
{ id: 1, author: 'William Shakespeare', title: 'Hamlet', genre: 'drama' },
{ id: 2, author: 'Miguel de Cervantes', title: 'Don Quixote', genre: 'próza' },
{ id: 3, author: 'Johann Wolfgang von Goethe', title: 'Faust', genre: 'drama' },
{ id: 4, author: 'Daniel Defoe', title: 'Robinson Crusoe', genre: 'próza' },
{ id: 5, author: 'Jonathan Swift', title: 'Gulliverovy cesty', genre: 'próza' },
{ id: 6, author: 'Kliment Gottwald', title: 'Český kníže Václav', genre: 'poetry' },
{ id: 7, author: 'František Přemysl Šulc', title: 'Cestopis československého žáka', genre: 'próza' },
{ id: 8, author: 'Václav Kliment Klicpera', title: 'Hadrián z Římstalů', genre: 'drama' },
{ id: 9, author: 'Jean Racine', title: 'Faidra', genre: 'drama' },
{ id: 10, author: 'Ludvig Holberg', title: 'Ján Křestitel', genre: 'drama' }
    ],
    category2: [
{ id: 11, author: 'Jane Austen', title: 'Pýcha a předsudek', genre: 'próza' },
{ id: 12, author: 'Charlotte Brontë', title: 'Jane Eyrová', genre: 'próza' },
{ id: 13, author: 'Charles Dickens', title: 'Oliver Twist', genre: 'próza' },
{ id: 14, author: 'Gustave Flaubert', title: 'Paní Bovaryová', genre: 'próza' },
{ id: 15, author: 'Victor Hugo', title: 'Chrám Notre-Dame', genre: 'próza' },
{ id: 16, author: 'Alexander Dumas', title: 'Hrabě Monte Christo', genre: 'próza' },
{ id: 17, author: 'Honoré de Balzac', title: 'Otec Goriot', genre: 'próza' },
{ id: 18, author: 'Jaroslav Hašek', title: 'Osudy dobrého vojáka Švejka', genre: 'próza' },
{ id: 19, author: 'Karel Čapek', title: 'Krakatit', genre: 'próza' },
{ id: 20, author: 'Božena Němcová', title: 'Babička', genre: 'próza' },
{ id: 21, author: 'Smetana', title: 'Kde domov můj', genre: 'poetry' },
{ id: 22, author: 'Petr Bezruč', title: 'Slezské písně', genre: 'poetry' }
    ],
    category3: [
{ id: 23, author: 'George Orwell', title: '1984', genre: 'próza' },
{ id: 24, author: 'Franz Kafka', title: 'Proces', genre: 'próza' },
{ id: 25, author: 'Albert Camus', title: 'Cizinec', genre: 'próza' },
{ id: 26, author: 'Ernest Hemingway', title: 'Stařec a moře', genre: 'próza' },
{ id: 27, author: 'J.D. Salinger', title: 'Muž, který chytá v žitě', genre: 'próza' },
{ id: 28, author: 'William Faulkner', title: 'Mientras agonizo', genre: 'próza' },
{ id: 29, author: 'Ray Bradbury', title: 'Ilustrovaný muž', genre: 'próza' },
{ id: 30, author: 'Samuel Beckett', title: 'Čekám na Godota', genre: 'drama' },
{ id: 31, author: 'Tennessee Williams', title: 'Tramvaj do stanice touha', genre: 'drama' },
{ id: 32, author: 'Arthur Miller', title: 'Prodej smrti', genre: 'drama' }
    ],
    category4: [
{ id: 33, author: 'Bohumil Hrabal', title: 'Příliš hlučná samota', genre: 'próza' },
{ id: 34, author: 'Milan Kundera', title: 'Nesnesitelná lehkost bytí', genre: 'próza' },
{ id: 35, author: 'Václav Havel', title: 'Audience', genre: 'drama' },
{ id: 36, author: 'Ivan Klíma', title: 'Můj zlatý řemeslo', genre: 'próza' },
{ id: 37, author: 'Darina Gabzdilová', title: 'Nebeské bílé město', genre: 'próza' },
{ id: 38, author: 'Vladimír Holan', title: 'Noc s Hamletem', genre: 'poetry' },
{ id: 39, author: 'Miroslav Holub', title: 'Anděl na kolečkách', genre: 'poetry' },
{ id: 40, author: 'Josef Kajetán Tyl', title: 'Fidlovačka', genre: 'drama' }
    ]
};

    // Mapping kategorií
    const categoryMap = {
    1: 'category1',
    2: 'category2',
    3: 'category3',
    4: 'category4'
};

    // Inicializace aplikace
    document.addEventListener('DOMContentLoaded', function() {
    loadBooks();
    updateSummary();
});

    function loadBooks() {
    for (const [catNum, catId] of Object.entries(categoryMap)) {
    const container = document.getElementById(catId);
    const categoryBooks = books[catId];

    categoryBooks.forEach(book => {
    const bookCard = createBookCard(book);
    container.appendChild(bookCard);
});
}
}

    function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.bookId = book.id;

    const genreClass = book.genre === 'próza' ? 'genre-prose' :
    book.genre === 'poetry' ? 'genre-poetry' : 'genre-drama';

    const genreLabel = book.genre === 'poetry' ? 'Poezie' :
    book.genre === 'drama' ? 'Drama' : 'Próza';

    card.innerHTML = `
                <label style="display: flex; align-items: flex-start; cursor: pointer; margin: 0;">
                    <input 
                        type="checkbox" 
                        name="books[]" 
                        value="${book.id}" 
                        class="book-checkbox"
                        data-author="${book.author}"
                        data-genre="${book.genre}"
                        onchange="updateSummary()"
                    >
                    <div class="book-info">
                        <div class="book-title">${book.title}</div>
                        <div class="book-author">${book.author}</div>
                        <span class="book-genre ${genreClass}">${genreLabel}</span>
                    </div>
                </label>
            `;

    return card;
}

    function updateSummary() {
    const form = document.getElementById('bookForm');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');

    // Počítání žánrů
    let prosCount = 0, poesCount = 0, dramaCount = 0;
    let selectedBooks = [];
    const authorCounts = {};

    checkboxes.forEach(checkbox => {
    const genre = checkbox.dataset.genre;
    const author = checkbox.dataset.author;

    if (genre === 'próza') prosCount++;
    else if (genre === 'poetry') poesCount++;
    else if (genre === 'drama') dramaCount++;

    authorCounts[author] = (authorCounts[author] || 0) + 1;
    selectedBooks.push({
    id: checkbox.value,
    author: author,
    genre: genre
});
});

    // Aktualizace počítadel
    document.getElementById('selectedCount').textContent = `Vybráno: ${checkboxes.length}`;
    document.getElementById('totalCount').textContent = `${checkboxes.length} / 4`;
    document.getElementById('prosaCount').textContent = `${prosCount} / 2`;
    document.getElementById('poesieCount').textContent = `${poesCount} / 2`;
    document.getElementById('dramaCount').textContent = `${dramaCount} / 2`;
    document.getElementById('prosaStat').textContent = prosCount;
    document.getElementById('poesieStat').textContent = poesCount;
    document.getElementById('dramaStat').textContent = dramaCount;

    // Kontrola autorů
    let authorValid = true;
    for (const count of Object.values(authorCounts)) {
    if (count > 2) {
    authorValid = false;
    break;
}
}

    const authorStatus = document.getElementById('authorStatus');
    if (authorValid) {
    authorStatus.textContent = '✓ OK';
    authorStatus.className = 'status-badge status-valid';
} else {
    authorStatus.textContent = '✗ Chyba';
    authorStatus.className = 'status-badge status-invalid';
}

    // Kontrola tlačítka odeslání
    updateSubmitButton(checkboxes.length, prosCount, poesCount, dramaCount, authorValid);
}

    function updateSubmitButton(total, pros, poes, drama, authorValid) {
    const submitBtn = document.getElementById('submitBtn');
    const isValid = total === 4 && pros >= 2 && poes >= 2 && drama >= 2 && authorValid;

    submitBtn.disabled = !isValid;

    if (isValid) {
    submitBtn.style.opacity = '1';
    submitBtn.style.cursor = 'pointer';
} else {
    submitBtn.style.opacity = '0.5';
    submitBtn.style.cursor = 'not-allowed';
}
}

    document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const checkboxes = this.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length === 0) {
    showMessage('Vyberte alespoň 4 díla', 'error');
    return;
}

    let selectedList = '<ul style="margin: 10px 0; padding-left: 20px;">';
    checkboxes.forEach(checkbox => {
    const bookId = checkbox.value;
    let bookTitle = '', bookAuthor = '';

    for (const category of Object.values(books)) {
    const book = category.find(b => b.id == bookId);
    if (book) {
    bookTitle = book.title;
    bookAuthor = book.author;
    break;
}
}

    selectedList += `<li><strong>${bookTitle}</strong> - ${bookAuthor}</li>`;
});
    selectedList += '</ul>';

    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = `
                <div class="success-message">
                    <strong>✓ Výběr byl úspěšně odeslán!</strong>
                    <p style="margin: 10px 0;">Vaše vybraná díla:</p>
                    ${selectedList}
                </div>
            `;

    // Scroll na zprávu
    messagesDiv.scrollIntoView({ behavior: 'smooth' });
});

    function showMessage(msg, type) {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = `<div class="error-message">${msg}</div>`;
}

    // Reset form
    document.querySelector('button[type="reset"]').addEventListener('click', function() {
    updateSummary();
    document.getElementById('messages').innerHTML = '';
});