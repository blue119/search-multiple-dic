// Dictionary search functionality
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const urbanWebview = document.getElementById("urban-webview");
const vocabularyWebview = document.getElementById("vocabulary-webview");
const cambridgeZhtWebview = document.getElementById("cambridge-zht-webview");
const collinsWebview = document.getElementById("collins-webview");

// Enable audio for each webview
const webviews = [
  urbanWebview,
  vocabularyWebview,
  cambridgeZhtWebview,
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

cambridgeZhtWebview.addEventListener("dom-ready", () => {
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
  cambridgeZhtWebview.executeJavaScript(script, true);
});

vocabularyWebview.addEventListener("dom-ready", () => {
  const script = `
    (function () {
      const selector = "#pageContent > div > div > div.definitionsContainer > div.definition-columns > div.col-1";
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
  vocabularyWebview.executeJavaScript(script, true);
});

function searchWord() {
  const word = searchInput.value.trim();

  if (word) {
    // Update all four webviews with search URLs
    urbanWebview.src = `https://www.urbandictionary.com/define.php?term=${encodeURIComponent(word)}`;
    vocabularyWebview.src = `https://www.vocabulary.com/dictionary/${encodeURIComponent(word)}`;
    cambridgeZhtWebview.src = `https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/${encodeURIComponent(word)}`;
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
