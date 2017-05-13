chrome.runtime.onMessage.addListener(function(message, sender, respond) {
  debugger;
  if (message.canonicalUrl) {
    // set the icon to a valid-looking one
  } else {
    // set the icon to an invalid-looking one
  }

  // show the page action
  chrome.pageAction.show(sender.tab.id);
});