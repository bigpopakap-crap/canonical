(function() {
  var canonicalUrl = null;
  try {
    canonicalUrl = document.querySelector('link[rel="canonical"]').href;
  } catch (ex) {
    // do nothing
  }

  chrome.runtime.sendMessage({
    canonicalUrl: canonicalUrl
  });
})();
