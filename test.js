window.onload = function() {
  console.log("Charles test");
  var locationJson = '{"location":"34.967149,135.772677"}';
  window.webkit.messageHandlers.readium.postMessage(['googleStreetView', locationJson]);
};
