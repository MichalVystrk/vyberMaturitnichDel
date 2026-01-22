<?php
function generateBooks()
{

}
/*	global $books;

	$renderItem = function ($item) {
		$bookGenreString = "";
		// sanitize output for safety
		$id = (int) ($item['id'] ?? 0);
		$author = htmlspecialchars($item['author'] ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
		$title = htmlspecialchars($item['title'] ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
		$genre = htmlspecialchars($item['genre'] ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

		if ($genre === "drama") {
			$bookGenreString = "<small class=\"book-genre genre-drama\">{$genre}</small></label></div>";
		}
		elseif ($genre === "próza") {
			$bookGenreString = "<small class=\"book-genre genre-prose\">{$genre}</small></label></div>";
		}
		elseif ($genre === "poezie") {
			$bookGenreString = "<small class=\"book-genre genre-poetry\">{$genre}</small></label></div>";
		}
		else {
			$bookGenreString = "</label></div>";
		}

		// Minimal markup — adapt classes to your CSS
		return "<div class=\"book-card\" data-id=\"{$id}\">"
			. "<label><input class='book-checkbox' type=\"checkbox\" name=\"books[]\" value=\"{$id}\" data-author=\"{$author}\" data-genre=\"{$genre}\" onchange=\"updateSummary()\">"
			. "<span class=\"book-title\">{$title}</span><br>"
			. "<span class=\"book-author\">{$author}</span><br>"
			. $bookGenreString;
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
*/

