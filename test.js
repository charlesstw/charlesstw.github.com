window.onload = function() {
  console.log("Charles test");
  var locationString = "34.967149,135.772677";
  window.webkit.messageHandlers.readium.postMessage(['googleStreetView', locationString]);
};
