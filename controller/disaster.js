const distance = require('distance-matrix-api');

const Disaster = require('../model/disaster');
const User = require('../model/user');

exports.all_locations_post = async (req, res) => {
    try {
        console.log(req.body);
        const { coordinates } = req.body;
        const disaster = new Disaster({
            coordinates
        });
        await disaster.save();
        res.json({ flooded_location: disaster });
    } catch (err) {
        return res.json({ error: 'Some error occured!!!', err });
    }
};

exports.all_locations_get = async (req, res) => {
    const disasters = await Disaster.find();
    res.json({ flooded_locations: disasters });
}

exports.compare_distance = async (req, res) => {
    const disasters = await Disaster.find().select('coordinates');
    const userLoc = await User.find().select('default_loc');

    const origins = [];
    const destinations = [];

    userLoc.map(uLoc => {
        origins.push(uLoc.default_loc);
    });

    disasters.map(disaster => {
        destinations.push(disaster.coordinates);
    });

    distance.key('AlphaDMABzEE8y03t0VsipsvR1z7fkZDiU7Erqmy');
    distance.units('metric');
    const userLocations = [];
    const userLocationsArray = [];

    distance.matrix(origins, destinations, async (err, distances) => {
        if (err) {
            return res.json({ error: 'Something went wrong!' });
        }
        if (!distances) {
            return res.json({ error: 'Distance not measurable!' });
        }
        if (distances.status == 'OK') {
            for (let i = 0; i < origins.length; i++) {
                for (let j = 0; j < destinations.length; j++) {
                    if (distances.rows[0].elements[j].status == 'OK') {
                        const distance = distances.rows[i].elements[j].distance.text;
                        const result = distance.split(' ');
                        if (result[0] > 10) {
                            userLocations.push(origins[i]);
                            const users = await User.find({
                                default_loc: origins[i],
                                role: { $ne: 1 }
                            });
                            userLocationsArray.push(users[0]);
                        }
                    } else {
                        console.log('Not reachable!');
                    }
                }
            }

            const distinctUsers = Array.from(new Set(userLocationsArray.map(user => user.phone)))
                .map(phone => {
                    return {
                        phone,
                        name: userLocationsArray.find(user => user.phone === phone).name,
                        role: userLocationsArray.find(user => user.phone === phone).role,
                        affected: userLocationsArray.find(user => user.phone === phone).affected,
                        default_loc: userLocationsArray.find(user => user.phone === phone).default_loc
                    }
                });

            return res.json({
                success: 'Notify users living within this location!',
                // userLocationsAffected : userLocations,
                distinctUsersAffcted: distinctUsers
            });
        }
    });
}