window.onload = function() {
  console.log("Charles test");
  var locationJson = '{"location":"35.010327,135.666977"}';
  window.webkit.messageHandlers.readium.postMessage(['googleStreetView', locationJson]);
};
