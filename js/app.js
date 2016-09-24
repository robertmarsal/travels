// Styles from https://snazzymaps.com/style/38/shades-of-grey
var styles = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{"saturation": 36}, {"color": "#000000"}, {"lightness": 40}]
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
}, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"}]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#000000"}, {"lightness": 20}]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 20}]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 21}]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#000000"}, {"lightness": 17}]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 18}]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 16}]
}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 19}]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 17}]
}];

var mapOptions = {
    center: {lat: 38.957083, lng: -39.074225},
    zoom: 3,
    disableDefaultUI: true,
    backgroundColor: '#2b2b2b',
    styles: styles
};

var data = [
    {lat: 38.957083, lng: -39.074225, title: 'Test'}
];

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    addMarkers(map, data);
}

function addMarkers(map, data) {
    for (var i in data) {
        new google.maps.Marker({
            position: {lat: data[i].lat, lng: data[i].lng},
            title: data[i].title,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 3,
                strokeWeight: 2,
                strokeColor: '#FF0066',
                //fillColor: '#FF0066',
                //fillOpacity: 1,
            },
            map: map
        });
    }
}
