popup.onclick = function() {
    chrome.tabs.create({url : "popup.html"});
    popup.cancel();
}
