<?php
include("books.php");
/**
 * Generate HTML blocks for categories from $books
 *
 * Usage:
 *   // all categories as associative array: ['category1' => '<div>...</div>', ...]
 *   $blocks = generateBooks();
 *
 *   // single category HTML string (or null if not found)
 *   $html = generateBooks('category1');
 *
 * The function does not echo by default — it returns strings so caller can place them
 * into specific containers (e.g. <div id="category1">).
 */
function generateBooks($category = null)
{
	global $books;
	if (!isset($books) || !is_array($books)) {
		return $category === null ? [] : null;
	}

	$renderItem = function ($item) {
		// sanitize output for safety
		$id = (int) ($item['id'] ?? 0);
		$author = htmlspecialchars($item['author'] ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
		$title = htmlspecialchars($item['title'] ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
		$genre = htmlspecialchars($item['genre'] ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

		// Minimal markup — adapt classes to your CSS
		return "<div class=\"book-card\" data-id=\"{$id}\">"
			. "<label><input class='book-checkbox' type=\"checkbox\" name=\"books[]\" value=\"{$id}\" onchange=\"updateSummary()\">"
			. "<span class=\"book-title\">{$title}</span> — "
			. "<span class=\"book-author\">{$author}</span>"
			. "<small class=\"book-genre\">({$genre})</small></label></div>";
	};

	$result = [];
	foreach ($books as $book => $items) {
		$parts = [];
		foreach ($items as $it) {
			$parts[] = $renderItem($it);
		}
		$result[$book] = implode("\n", $parts);
	}

	if ($category !== null) {
		return $result[$category] ?? null;
	}

	return $result;
}