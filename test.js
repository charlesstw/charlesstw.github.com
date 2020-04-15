window.onload = function() {
  console.log("Charles test");
//  var locationJson = '{"location":"34.9671402,135.7726717"}';
  var locationJson = '{"location":"https://goo.gl/maps/3gTG4Jt9VCTquHTP9"}';
  window.webkit.messageHandlers.readium.postMessage(['googleStreetView', locationJson]);
};
