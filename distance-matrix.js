const distance = require('distance-matrix-api');
 
const origins = ["26.5143257,93.9483617","26.5430797,91.9071653"];
const destinations = ["26.4159862,91.0637408","26.5105954,90.6228871","26.5143257,93.9483617","27.1709036,93.868768","26.5260594,90.7961624"];
 
distance.key('AlphaDMABzEE8y03t0VsipsvR1z7fkZDiU7Erqmy');
distance.units('metric');
// https://maps.distancematrixapi.com/maps/api/distancematrix/json?origins=pathsala&destinations=barpeta&departure_time=now&key=AlphaDMABzEE8y03t0VsipsvR1z7fkZDiU7Erqmy
 
distance.matrix(origins, destinations, function (err, distances) {
    if (err) {
        return console.log(err);
    }
    if(!distances) {
        return console.log('no distances');
    }
    if (distances.status == 'OK') {
        for (var i=0; i < origins.length; i++) {
            for (var j = 0; j < destinations.length; j++) {
                var origin = distances.origin_addresses[i];
                var destination = distances.destination_addresses[j];
                if (distances.rows[0].elements[j].status == 'OK') {
                    var distance = distances.rows[i].elements[j].distance.text;
                    console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                } else {
                    console.log(destination + ' is not reachable by land from ' + origin);
                }
            }
        }
    }
});