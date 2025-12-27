// Dictionary search functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const dictionaryWebview = document.getElementById('dictionary-webview');
const merriamWebview = document.getElementById('merriam-webview');

function searchWord() {
    const word = searchInput.value.trim();

    if (word) {
        // Update both webviews with search URLs
        dictionaryWebview.src = `https://www.dictionary.com/browse/${encodeURIComponent(word)}`;
        merriamWebview.src = `https://www.merriam-webster.com/dictionary/${encodeURIComponent(word)}`;
    }
}

// Search on button click
searchButton.addEventListener('click', searchWord);

// Search on Enter key press
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWord();
    }
});

// Focus on input when page loads
window.addEventListener('DOMContentLoaded', () => {
    searchInput.focus();
});

console.log('Dictionary Viewer Loaded Successfully!');
