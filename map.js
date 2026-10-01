
var map = L.map('map').setView([29.8884, -97.9384], 14);

var mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18
}).addTo(map);
