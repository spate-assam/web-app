const Disaster = require('../model/disaster');

exports.all_locations_post = async (req, res) => {
    try {
        console.log(req.body);
        const { latitude, longitude } = req.body;
        const disaster = new Disaster({
            location: {
                latitude,
                longitude
            }
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