// Marking and popup
var mymap1 = L.map('mapid1').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap1);
L.marker([51.5, -0.09]).addTo(mymap1)
    .bindPopup("<b>Hello world!</b><br />It's a popup.").openPopup();
L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap1).bindPopup("I am a circle.");
L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap1).bindPopup("I am a polygon.");
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap1);
}
mymap1.on('click', onMapClick);
// Distance from position
var mymap2 = L.map('mapid2').fitWorld();
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap2);
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(mymap2)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(mymap2);
}
function onLocationError(e) {
    alert(e.message);
}
mymap2.on('locationfound', onLocationFound);
mymap2.on('locationerror', onLocationError);
mymap2.locate({setView: true, maxZoom: 16});
// Custom Icon
var mymap3 = L.map('mapid3').setView([51.5, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap3);
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'assets/img/leaflet-shadow.png',
        iconSize:     [35, 41],
        shadowSize:   [35, 41],
        iconAnchor:   [22, 94],
        shadowAnchor: [20, 92],
        popupAnchor:  [-3, -76]
    }
});
var redIcon = new LeafIcon({iconUrl: 'assets/img/leaflet-red.png'}),
    blueIcon = new LeafIcon({iconUrl: 'assets/img/leaflet-blue.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'assets/img/leaflet-orange.png'});
L.marker([51.5, -0.09], {icon: redIcon}).bindPopup("I am a red marker.").addTo(mymap3);
L.marker([51.495, -0.083], {icon: blueIcon}).bindPopup("I am a blue marker.").addTo(mymap3);
L.marker([51.49, -0.1], {icon: orangeIcon}).bindPopup("I am an orange marker.").addTo(mymap3);
// Differentiate different area based on population
var mymap4 = L.map('mapid4').setView([37.8, -96], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap4);
var info = L.control();
info.onAdd = function (mymap4) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
info.update = function (props) {
    this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
};
info.addTo(mymap4);
function getColor(d) {
    return d > 1000 ? '#800026' :
            d > 500  ? '#BD0026' :
            d > 200  ? '#E31A1C' :
            d > 100  ? '#FC4E2A' :
            d > 50   ? '#FD8D3C' :
            d > 20   ? '#FEB24C' :
            d > 10   ? '#FED976' :
                        '#FFEDA0';
}
function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.density)
    };
}
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 2,
        color: '#ff3c00',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}
var geojson;
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}
function zoomToFeature(e) {
    mymap4.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}
geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mymap4);
mymap4.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (mymap4) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [],
        from, to;
    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];
        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }
    div.innerHTML = labels.join('<br>');
    return div;
};
legend.addTo(mymap4);
// Layer Groups and Layers Control
var cities = L.layerGroup();
L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
var mymap5 = L.map('mapid5', {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [grayscale, cities]
});
var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};
var overlays = {
    "Cities": cities
};
L.control.layers(baseLayers, overlays).addTo(mymap5);
// Map Panes
var mymap6 = L.map('mapid6');
mymap6.createPane('labels');
mymap6.getPane('labels').style.zIndex = 650;
mymap6.getPane('labels').style.pointerEvents = 'none';
var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';
var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
}).addTo(mymap6);
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution,
    pane: 'labels'
}).addTo(mymap6);
geojson = L.geoJson(euCountries).addTo(mymap6);
geojson.eachLayer(function (layer) {
    layer.bindPopup(layer.feature.properties.name);
});
mymap6.setView({ lat: 47.040182144806664, lng: 9.667968750000002 }, 4);
// Video Overlay
var mymap7 = L.map('mapid7');
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap7);
var videoUrls = [
    'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
    'https://www.mapbox.com/bites/00188/patricia_nasa.mp4'
],
bounds = L.latLngBounds([[ 32, -130], [ 13, -100]]);
mymap7.fitBounds(bounds);
var overlay = L.videoOverlay(videoUrls, bounds, {
    opacity: 0.8,
    interactive: false,
    autoplay: false
});
mymap7.addLayer(overlay);
overlay.on('load', function () {
    var MyPauseControl = L.Control.extend({
        onAdd: function() {
            var button = L.DomUtil.create('button');
            button.innerHTML = '⏸';
            L.DomEvent.on(button, 'click', function () {
                overlay.getElement().pause();
            });
            return button;
        }
    });
    var MyPlayControl = L.Control.extend({
        onAdd: function() {
            var button = L.DomUtil.create('button');
            button.innerHTML = '▶️';
            L.DomEvent.on(button, 'click', function () {
                overlay.getElement().play();
            });
            return button;
        }
    });
    var pauseControl = (new MyPauseControl()).addTo(mymap7);
    var playControl = (new MyPlayControl()).addTo(mymap7);
});
