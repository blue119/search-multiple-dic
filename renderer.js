// Dictionary search functionality
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const urbanWebview = document.getElementById("urban-webview");
const cambridgeWebview = document.getElementById("cambridge-webview");
const merriamWebview = document.getElementById("merriam-webview");
const collinsWebview = document.getElementById("collins-webview");

// Enable audio for each webview
const webviews = [
  urbanWebview,
  cambridgeWebview,
  merriamWebview,
  collinsWebview,
];

webviews.forEach((webview) => {
  webview.addEventListener("dom-ready", () => {
    // Set audio to be unmuted
    webview.setAudioMuted(false);
  });
});

function searchWord() {
  const word = searchInput.value.trim();

  if (word) {
    // Update all four webviews with search URLs
    urbanWebview.src = `https://www.urbandictionary.com/define.php?term=${encodeURIComponent(word)}`;
    cambridgeWebview.src = `https://dictionary.cambridge.org/us/dictionary/english/${encodeURIComponent(word)}`;
    merriamWebview.src = `https://www.merriam-webster.com/dictionary/${encodeURIComponent(word)}`;
    collinsWebview.src = `https://www.collinsdictionary.com/us/dictionary/english/${encodeURIComponent(word)}`;
  }
}

// Search on button click
searchButton.addEventListener("click", searchWord);

// Search on Enter key press
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchWord();
  }
});

// Focus on input when page loads
window.addEventListener("DOMContentLoaded", () => {
  searchInput.focus();
});

console.log("Dictionary Viewer Loaded Successfully!");
