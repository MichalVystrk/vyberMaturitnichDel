document.addEventListener('DOMContentLoaded', () => {
  // inicialní update (pokud jsou checkboxy již v DOM)
  updateSummary();

  // delegovaná změna - funguje i pro dynamicky vložené checkboxy
  document.addEventListener('change', (e) => {
    if (e.target && e.target.matches('input.book-checkbox')) {
      updateSummary();
    }
  });

  // submit handler
  const form = document.getElementById('bookForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const checkboxes = form.querySelectorAll('input.book-checkbox:checked');
      if (checkboxes.length !== 20) {
        showMessage('Musíte vybrat přesně 20 děl!', 'error');
        return;
      }

      let selectedList = '<ul style="margin: 10px 0; padding-left: 20px;">';
      checkboxes.forEach(checkbox => {
        const bookId = checkbox.value;
        let bookTitle = '', bookAuthor = '';
        for (const category of Object.values(window.books || {})) {
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
      messagesDiv.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // reset tlačítko
  const resetBtn = document.querySelector('button[type="reset"]');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      updateSummary();
      const messages = document.getElementById('messages');
      if (messages) messages.innerHTML = '';
    });
  }
});

function updateSummary() {
  const form = document.getElementById('bookForm');
  if (!form) return;

  const checkboxes = form.querySelectorAll('input.book-checkbox:checked');

  // Počítání žánrů
  let prosCount = 0, poesCount = 0, dramaCount = 0;
  const authorCounts = {};

  checkboxes.forEach(checkbox => {
    const genre = (checkbox.dataset.genre || '').toLowerCase();
    const author = checkbox.dataset.author || '';

    if (genre === 'próza' || genre === 'proza' || genre === 'prose') prosCount++;
    else if (genre === 'poetry' || genre === 'poezie') poesCount++;
    else if (genre === 'drama') dramaCount++;

    if (author) authorCounts[author] = (authorCounts[author] || 0) + 1;
  });

  // Aktualizace počítadel v DOM
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText('selectedCount', `Vybráno: ${checkboxes.length}`);
  setText('totalCount', `${checkboxes.length} / 20`);
  setText('prosaCount', `${prosCount} / 2`);
  setText('poesieCount', `${poesCount} / 2`);
  setText('dramaCount', `${dramaCount} / 2`);
  setText('prosaStat', prosCount);
  setText('poesieStat', poesCount);
  setText('dramaStat', dramaCount);

  // Kontrola autorů (max 2)
  let authorValid = true;
  for (const count of Object.values(authorCounts)) {
    if (count > 2) { authorValid = false; break; }
  }
  const authorStatus = document.getElementById('authorStatus');
  if (authorStatus) {
    authorStatus.textContent = authorValid ? '✓ OK' : '✗ Chyba';
    authorStatus.className = authorValid ? 'status-badge status-valid' : 'status-badge status-invalid';
  }

  updateSubmitButton(checkboxes.length, prosCount, poesCount, dramaCount, authorValid);
}

function updateSubmitButton(total, pros, poes, drama, authorValid) {
  const submitBtn = document.getElementById('submitBtn');
  if (!submitBtn) return;
  const isValid = total === 20 && pros >= 2 && poes >= 2 && drama >= 2 && authorValid;
  submitBtn.disabled = !isValid;
  submitBtn.style.opacity = isValid ? '1' : '0.5';
  submitBtn.style.cursor = isValid ? 'pointer' : 'not-allowed';
}

function showMessage(msg, type) {
  const messagesDiv = document.getElementById('messages');
  if (!messagesDiv) return;
  messagesDiv.innerHTML = `<div class="${type === 'error' ? 'error-message' : 'success-message'}">${msg}</div>`;
}