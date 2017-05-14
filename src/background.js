function handleLoad(message, sender, respond) {
  if (message.canonicalUrl) {
    if (message.canonicalUrl === sender.url) {
      // set title to "On canonical already"
      // disable action
    } else {
      // set title to "Clean url"
      // enable action
    }
  } else {
    // set title to "No canonical found"
    // disable action
  }

  // show the page action
  chrome.browserAction.show(sender.tab.id);
}

function handleDid(message, sender, respond) {
  // set the title to "Done"
  // set the icon to the one with a check mark
  // disable action
}

chrome.runtime.onMessage.addListener(function(message, sender, respond) {
  if (!message) return;

  if (message.action === 'loadCanonical') {
    handleLoad(message, sender, respond);
  } else if (message.action === 'doneCanonical') {
    handleDid(message, sender, respond);
  }
});

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs && tabs.length > 0) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'canonicalize' },
        function(response) {}
      );
    }
  });
});