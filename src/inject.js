(function() {
  var canonicalUrl = null;

  chrome.runtime.onMessage.addListener(function(message, sender) {
    debugger;
    if (message && message.action === 'canonicalize') {
      window.history.replaceState(
        window.history.state,
        'Canonicalized',
        canonicalUrl
      );

      chrome.runtime.sendMessage({
        action: 'doneCanonical'
      });
    }
  });

  try {
    canonicalUrl = document.querySelector('link[rel="canonical"]').href;
  } catch (ex) {
    // do nothing
  }

  chrome.runtime.sendMessage({
    action: 'loadCanonical'
    canonicalUrl: canonicalUrl
  });
})();
