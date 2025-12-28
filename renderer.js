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

urbanWebview.addEventListener("dom-ready", () => {
  const script = `
    (function () {
      const selector = "#main-content > div > div.flex.flex-col.lg\\\\:flex-row.mx-0.gap-4 > section";
      const applyCrop = () => {
        const target = document.querySelector(selector);
        if (!target) return false;
        const chain = [];
        let node = target;
        while (node) {
          chain.push(node);
          if (node === document.body) break;
          node = node.parentElement;
        }
        chain.reverse();
        for (let i = 0; i < chain.length - 1; i++) {
          const current = chain[i];
          const next = chain[i + 1];
          Array.from(current.children).forEach((child) => {
            if (child !== next) {
              child.style.display = "none";
            }
          });
        }
        target.style.width = "100%";
        target.style.maxWidth = "100%";
        return true;
      };

      if (applyCrop()) return;

      const observer = new MutationObserver(() => {
        if (applyCrop()) {
          observer.disconnect();
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });

      setTimeout(() => observer.disconnect(), 10000);
    })();
  `;
  urbanWebview.executeJavaScript(script, true);
});

collinsWebview.addEventListener("dom-ready", () => {
  const script = `
    (function () {
      const selector = "#main_content > div.res_cell_center";
      const applyCrop = () => {
        const target = document.querySelector(selector);
        if (!target) return false;
        const chain = [];
        let node = target;
        while (node) {
          chain.push(node);
          if (node === document.body) break;
          node = node.parentElement;
        }
        chain.reverse();
        for (let i = 0; i < chain.length - 1; i++) {
          const current = chain[i];
          const next = chain[i + 1];
          Array.from(current.children).forEach((child) => {
            if (child !== next) {
              child.style.display = "none";
            }
          });
        }
        target.style.width = "100%";
        target.style.maxWidth = "100%";
        return true;
      };

      if (applyCrop()) return;

      const observer = new MutationObserver(() => {
        if (applyCrop()) {
          observer.disconnect();
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });

      setTimeout(() => observer.disconnect(), 10000);
    })();
  `;
  collinsWebview.executeJavaScript(script, true);
});

merriamWebview.addEventListener("dom-ready", () => {
  const script = `
    (function () {
      const selector = "#left-content";
      const applyCrop = () => {
        const target = document.querySelector(selector);
        if (!target) return false;
        const chain = [];
        let node = target;
        while (node) {
          chain.push(node);
          if (node === document.body) break;
          node = node.parentElement;
        }
        chain.reverse();
        for (let i = 0; i < chain.length - 1; i++) {
          const current = chain[i];
          const next = chain[i + 1];
          Array.from(current.children).forEach((child) => {
            if (child !== next) {
              child.style.display = "none";
            }
          });
        }
        target.style.width = "100%";
        target.style.maxWidth = "100%";
        return true;
      };

      if (applyCrop()) return;

      const observer = new MutationObserver(() => {
        if (applyCrop()) {
          observer.disconnect();
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });

      setTimeout(() => observer.disconnect(), 10000);
    })();
  `;
  merriamWebview.executeJavaScript(script, true);
});

cambridgeWebview.addEventListener("dom-ready", () => {
  const script = `
    (function () {
      const selector = "#page-content > div.pr.di.superentry > div.di-body";
      const applyCrop = () => {
        const target = document.querySelector(selector);
        if (!target) return false;
        const chain = [];
        let node = target;
        while (node) {
          chain.push(node);
          if (node === document.body) break;
          node = node.parentElement;
        }
        chain.reverse();
        for (let i = 0; i < chain.length - 1; i++) {
          const current = chain[i];
          const next = chain[i + 1];
          Array.from(current.children).forEach((child) => {
            if (child !== next) {
              child.style.display = "none";
            }
          });
        }
        target.style.width = "100%";
        target.style.maxWidth = "100%";
        return true;
      };

      if (applyCrop()) return;

      const observer = new MutationObserver(() => {
        if (applyCrop()) {
          observer.disconnect();
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });

      setTimeout(() => observer.disconnect(), 10000);
    })();
  `;
  cambridgeWebview.executeJavaScript(script, true);
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
