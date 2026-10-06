import * as turf from "@turf/turf";
var map = L.map('map').setView([29.8884, -97.9384], 14);

var mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18
}).addTo(map);

function addMarkerWithBuffer() {
    var point = turf.point([-97.9420, 29.8886]);
    var buffered = turf.buffer(point, 1, { units: "miles" });

    L.geoJSON(buffered).addTo(map);
    L.geoJSON(point).addTo(map);
}
addMarkerWithBuffer();

  var route = turf.lineString([
    [-97.9384, 29.8884],
    [-122.3321, 47.6062],
]);
  const result = turf.length(route, { units: "miles" });

  L.geoJSON(route)
    .bindpopup("distance: " + result.toFixed(2)+ "miles")
    .addTO(map);
