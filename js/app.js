// Styles from https://snazzymaps.com/style/38/shades-of-grey
var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{"saturation": 36}, {"color": "#000000"}, {"lightness": 40}]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#000000"}, {"lightness": 20}]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{"color": "#000000"}, {"lightness": 20}]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{"color": "#000000"}, {"lightness": 21}]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#000000"}, {"lightness": 17}]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{"color": "#000000"}, {"lightness": 18}]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{"color": "#000000"}, {"lightness": 16}]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{"color": "#000000"}, {"lightness": 19}]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{"color": "#000000"}, {"lightness": 17}]
    }
];

var mapOptions = {
    center: {lat: 38.957083, lng: -39.074225},
    zoom: 3,
    disableDefaultUI: true,
    backgroundColor: '#2b2b2b',
    styles: styles
};

function addMarkers(map, data) {
    for (var i in data) {
        new google.maps.Marker({
            position: {lat: data[i].lat, lng: data[i].lng},
            title: data[i].title,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 2,
                strokeWeight: 3,
                strokeColor: '#FF0066',
                fillColor: '#FF0066',
                fillOpacity: 1,
            },
            map: map
        });
    }
}

function addOverlayView(map) {
    var overlayView = new google.maps.OverlayView();
    overlayView.draw = function () {
        this.getPanes().markerLayer.id = 'markers';
    };
    overlayView.setMap(map);
}

function fitBounds(map, data) {
    var latLngBounds = new google.maps.LatLngBounds();
    for (var i = 0; i < data.length; i++) {
        latLngBounds.extend({lat: data[i].lat, lng: data[i].lng});
    }
    map.fitBounds(latLngBounds);
}

function initMapCallback() {
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Configure the map
    addMarkers(map, data);
    addOverlayView(map);
    fitBounds(map, data);
}

// Load the google maps script dynamically so that we can configure the key
var googleMapsScript = document.createElement('script');
googleMapsScript.async = true;
googleMapsScript.defer = true;
googleMapsScript.src   = 'https://maps.googleapis.com/maps/api/js?callback=initMapCallback&key=' + config.apiKey;
document.getElementsByTagName('body')[0].appendChild(googleMapsScript);
