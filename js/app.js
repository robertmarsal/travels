var data = [
    {lat: 51.500736, lng: -0.124625, title: 'London - United Kingdom'},
    {lat: 54.048200, lng: -2.797351, title: 'Lancaster - United Kingdom'},
    {lat: 44.427198, lng: 26.086905, title: 'Bucharest - Romania'},
    {lat: 47.156933, lng: 27.587484, title: 'Iași - Romania'},
    {lat: 45.640874, lng: 25.587726, title: 'Brașov - Romania'},
    {lat: 43.943518, lng: 28.633781, title: 'Costinești - Romania'},
    {lat: 46.215133, lng: 27.672790, title: 'Bârlad - Romania'},
    {lat: 47.517088, lng: 25.864180, title: 'Voroneț - Romania'},
    {lat: 47.635154, lng: 25.898160, title: 'Cacica - Romania'},
    {lat: 64.150337, lng: -21.932715, title: 'Reykjavík - Iceland'},
    {lat: 40.416949, lng: -3.703536, title: 'Madrid - Spain'},
    {lat: 41.113707, lng: 1.255790, title: 'Tarragona - Spain'},
    {lat: 41.405179, lng: 2.175506, title: 'Barcelona - Spain'},
    {lat: 38.262439, lng: -0.721192, title: 'Elche - Spain'},
    {lat: 39.455156, lng: -0.350433, title: 'Valencia - Spain'},
    {lat: 42.509264, lng: 1.530649, title: 'Andorra la Vella - Andorra'},
    {lat: 51.212594, lng: 3.227896, title: 'Bruges - Belgium'},
    {lat: 50.846723, lng: 4.352368, title: 'Brussels - Belgium'},
    {lat: 54.155190, lng: -4.478464, title: 'Douglas - Isle of Man'},
    {lat: 48.858405, lng: 2.294460, title: 'Paris - France'},
    {lat: 52.509718, lng: 13.375700, title: 'Berlin - Germany'},
    {lat: 48.790189, lng: 9.183139, title: 'Stuttgart - Germany'},
    {lat: 48.678424, lng: 8.356038, title: 'Forbach - Germany'},
    {lat: 35.685766, lng: 139.690605, title: 'Tokyo - Japan'},
    {lat: 34.668945, lng: 135.501056, title: 'Osaka - Japan'},
    {lat: 34.395465, lng: 132.454000, title: 'Hiroshima - Japan'},
    {lat: 34.295957, lng: 132.319799, title: 'Miyajima - Japan'},
    {lat: 35.001988, lng: 135.775483, title: 'Kyoto - Japan'},
    {lat: 34.681935, lng: 135.828921, title: 'Nara - Japan'},
];

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

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Configure the map
    addMarkers(map, data);
    addOverlayView(map);
    fitBounds(map, data);
}
