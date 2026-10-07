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
    .bindPopup("Distance: " + result.toFixed(2)+ "miles")
    .addTo(map);

    var obstacleZone = turf.polygon([[
        [-97.9450, 29.8920],
        [-97.9380, 29.8920],
        [-97.9380, 29.8890],
        [-97.9450, 29.8890],
        [-97.9450, 29.8920]
    ]]);
  L.geoJSON(obstacleZone, { style: { color: 'red', fillColor: 'red', fillOpacity
  : 0.3 } }).addTo(map);
  var pathStart = turf.point([-97.9480, 29.8900]);
var pathEnd = turf.point([-97.9350, 29.8900]);
L.geoJSON(pathStart).addTo(map);
L.geoJSON(pathEnd).addTo(map);
var obstacleAvoidedPath = turf.shortestPath(pathStart, pathEnd, {
    obstacles: turf.featureCollection([obstacleZone])
});
L.geoJSON(obstacleAvoidedPath, { style: { color: 'blue', weight: 5 } })
.addTo(map);

function PolygonArea() {
  var polygon = turf.polygon([
    [
      [-97.9450, 29.8850],
      [-97.9480, 29.8850],
      [-97.9480, 29.8820],
      [-97.9450, 29.8820],
      [-97.9450, 29.8850]
    ],
]);

  var area = turf.area(polygon);
  L.geoJSON(polygon)
  .bindPopup("Area: " + area.toFixed(2) + " square meters")
  .addTo(map);
}
PolygonArea();
