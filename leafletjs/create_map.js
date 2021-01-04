
// https://leafletjs.com/examples/quick-start/


// !!!
var myMapboxToken = 'replace me'

//setting coordinates & zoom level
//all mouse and touch interactions on the map are enabled, and it has zoom and attribution controls
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//adding a tile layer to the map (url template + attribution text + max zoom level)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11', // or 'mapbox/satellite-v9'
    //Because this API returns 512x512 tiles by default (instead of 256x256), 
    //we will also have to explicitly specify this and offset our zoom by a value of -1
    tileSize: 512,
    zoomOffset: -1,
    accessToken: myMapboxToken
}).addTo(mymap);


//adding a markers
var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);


//adding popups
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);


//events
var popup2 = L.popup();

function onMapClick(e) {
    popup2
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
