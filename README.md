# Travels

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Map your travels around the world.

![Preview](http://i.imgur.com/7kFVWux.png)

See a live demo here: https://robertboloc.eu/projects/travels/

## Installation

Clone this repository then move the public folder into the html folder of your
web server

```
git clone https://github.com/robertboloc/travels.git
mv travels/public /var/www/html/travels
```

## Configuration

To configure the application please copy the `data.js.dist`
file to `data.js` and fill in the details.

You will need a [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) and the lat/lng of the
locations you want to map.
