/**
 * Aktualizuje celý summary panel při změně checkboxu
 */
function updateSummary() {
    const selected = document.querySelectorAll('input[name="books[]"]:checked');
    
    // Aktualizuj všechny počty a statistiky
    updateTotalCount(selected);
    updateCategoryCounts(selected);
    updateGenreStats(selected);
    validateAllRules(selected);
}

/**
 * Aktualizuje celkový počet vybraných děl (max 20)
 */
function updateTotalCount(selected) {
    const totalCount = selected.length;
    const maxCount = 20;
    
    const totalElement = document.getElementById('totalCount');
    if (totalElement) {
        totalElement.textContent = `${totalCount} / ${maxCount}`;
        
        // Barva: zelená OK, červená pokud překročíš
        if (totalCount > maxCount) {
            totalElement.style.color = '#fca5a5'; // Červená
        } else if (totalCount === maxCount) {
            totalElement.style.color = '#86efac'; // Zelená
        } else {
            totalElement.style.color = '#cbd5e1'; // Normální
        }
    }
}

/**
 * Spočítá knihy v jednotlivých kategoriích (min 4 v každé)
 */
function updateCategoryCounts(selected) {
    const categoryLimits = {
        'category1': { element: '18Count', limit: 2},
        'category2': { element: '19Count', limit: 3},
        'category3': { element: 's2021Count', limit: 4},
        'category4': { element: 'c2021Count', limit: 5}
    };
    
    // Spočítej knihy v každé kategorii
    Object.keys(categoryLimits).forEach(category => {
        const booksInCategory = document.querySelectorAll(
            `#${category} input[name="books[]"]:checked`
        ).length;
        
        const config = categoryLimits[category];
        const element = document.getElementById(config.element);
        
        if (element) {
            element.textContent = `${booksInCategory} / ${config.limit}`;
            
            // Barva podle statusu
            if (booksInCategory < config.limit) {
                element.style.color = '#fca5a5'; // Červená - nesplňuje minimum
            } else if (booksInCategory >= config.limit) {
                element.style.color = '#86efac'; // Zelená - splněno
            } else {
                element.style.color = '#cbd5e1'; // Normální
            }
        }
    });
}

/**
 * Spočítá knihy podle žánru (min 2 v každém)
 * Když má žánr 2+ knihy, stat-box zezelení
 */
function updateGenreStats(selected) {
    const genreCount = {
        'próza': 0,
        'poezie': 0,
        'drama': 0
    };
    
    selected.forEach(checkbox => {
        const genre = checkbox.getAttribute('data-genre');
        if (genre && genreCount.hasOwnProperty(genre)) {
            genreCount[genre]++;
        }
    });
    
    // Aktualizuj prvky a barvy
    const prosaElement = document.getElementById('prosaStat');
    if (prosaElement) {
        prosaElement.textContent = genreCount['próza'];
        prosaElement.parentElement.style.background = 
            genreCount['próza'] >= 2 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(99, 102, 241, 0.1)';
        prosaElement.style.color = 
            genreCount['próza'] >= 2 ? '#86efac' : 'var(--primary-color)';
    }
    
    const poesieElement = document.getElementById('poezieStat');
    if (poesieElement) {
        poesieElement.textContent = genreCount['poezie'];
        poesieElement.parentElement.style.background = 
            genreCount['poezie'] >= 2 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(99, 102, 241, 0.1)';
        poesieElement.style.color = 
            genreCount['poezie'] >= 2 ? '#86efac' : 'var(--primary-color)';
    }
    
    const dramaElement = document.getElementById('dramaStat');
    if (dramaElement) {
        dramaElement.textContent = genreCount['drama'];
        dramaElement.parentElement.style.background = 
            genreCount['drama'] >= 2 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(99, 102, 241, 0.1)';
        dramaElement.style.color = 
            genreCount['drama'] >= 2 ? '#86efac' : 'var(--primary-color)';
    }
}

/**
 * Ověří všechna pravidla a vypočítá jejich stav
 */
function validateAllRules(selected) {
    const rules = {
        totalCount: validateTotalCount(selected),
        categoryMinimums: validateCategoryMinimums(selected),
        authorLimit: validateAuthorLimit(selected),
        genreMinimums: validateGenreMinimums(selected)
    };
    
    return rules;
}

/**
 * Pravidlo 1: Maximálně 20 děl
 */
function validateTotalCount(selected) {
    return selected.length <= 20;
}

/**
 * Pravidlo 2: Minimálně 4 knihy v každé kategorii
 */
function validateCategoryMinimums(selected) {
    const categories = {
        'category1': 0,
        'category2': 0,
        'category3': 0,
        'category4': 0
    };
    
    Object.keys(categories).forEach(cat => {
        categories[cat] = document.querySelectorAll(
            `#${cat} input[name="books[]"]:checked`
        ).length;
    });
    
    // Všechny kategorie musí mít alespoň 4 knihy
    return Object.values(categories).every(count => count >= 4);
}

/**
 * Pravidlo 3: Max. 2 knihy od jednoho autora
 */
function validateAuthorLimit(selected) {
    const authorCount = {};
    
    selected.forEach(checkbox => {
        const author = checkbox.getAttribute('data-author');
        authorCount[author] = (authorCount[author] || 0) + 1;
    });
    
    // Ověř, že žádný autor nemá více než 2 knihy
    const isValid = Object.values(authorCount).every(count => count <= 2);
    
    // Aktualizuj status badge
    updateAuthorStatusBadge(isValid);
    
    return isValid;
}

/**
 * Pravidlo 4: Minimálně 2 knihy v každém žánru
 */
function validateGenreMinimums(selected) {
    const genreCount = {
        'próza': 0,
        'poezie': 0,
        'drama': 0
    };
    
    selected.forEach(checkbox => {
        const genre = checkbox.getAttribute('data-genre');
        if (genre && genreCount.hasOwnProperty(genre)) {
            genreCount[genre]++;
        }
    });
    
    // Všechny žánry musí mít alespoň 2 knihy
    return Object.values(genreCount).every(count => count >= 2);
}

/**
 * Aktualizuje stav "Max. 2 od autora"
 */
function updateAuthorStatusBadge(isValid) {
    const badgeElement = document.getElementById('authorStatus');
    
    if (badgeElement) {
        if (isValid) {
            badgeElement.textContent = '✓ OK';
            badgeElement.style.background = 'rgba(56,117,79,0.2)';
            badgeElement.style.color = '#86efac';
        } else {
            badgeElement.textContent = '✗ CHYBA';
            badgeElement.style.background = 'rgba(239, 68, 68, 0.2)';
            badgeElement.style.color = '#fca5a5';
        }
    }
}

/**
 * Inicializace - zavolá se při načtení stránky
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializuj summary panel
    updateSummary();
    
    // Přidej event listener na submit formuláře
    const bookForm = document.getElementById('bookForm');
    if (bookForm) {
        bookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const selected = document.querySelectorAll('input[name="books[]"]:checked');
            const rules = validateAllRules(selected);
            
            // Ověř všechny podmínky
            let errors = [];
            
            if (selected.length === 0) {
                errors.push('Vyberte alespoň jednu knihu!');
            }
            
            if (selected.length > 20) {
                errors.push('Můžete vybrat maximálně 20 knih!');
            }
            
            if (!rules.categoryMinimums) {
                errors.push('V každé kategorii musí být alespoň 4 knihy!');
            }
            
            if (!rules.authorLimit) {
                errors.push('Od jednoho autora lze vybrat maximálně 2 knihy!');
            }
            
            if (!rules.genreMinimums) {
                errors.push('V každém žánru (próza, poezie, drama) musí být alespoň 2 knihy!');
            }
            
            // Zobraz chyby nebo povolí submit
            if (errors.length > 0) {
                showMessage(errors.join('<br>'), 'error');
            } else {
                showMessage('✓ Výběr je v pořádku! Formulář se odesílá...', 'success');
                // Zde by se odesílal formulář:
                // setTimeout(() => bookForm.submit(), 1000);
            }
        });
    }
});

/**
 * Zobrazí zprávu v messages kontejneru
 */
function showMessage(text, type) {
    const messagesDiv = document.getElementById('messages');
    if (!messagesDiv) return;
    
    const messageClass = type === 'error' ? 'error-message' : 'success-message';
    messagesDiv.innerHTML = `<div class="${messageClass}">${text}</div>`;
    
    // Automaticky zmizí za 5 sekund
    setTimeout(() => {
        messagesDiv.innerHTML = '';
    }, 5000);
}