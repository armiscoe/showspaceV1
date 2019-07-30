var Gig = require('../models/Gig')

module.exports = {
    index,
    create,
    gdelete,
    show
}

function show(req, res) {
    Gig.findById(req.params.id)
    .then(gig => res.json(gig))
    .catch(err => res.status(400).json('Error: ' + err))
}

function gdelete(req, res) {
    Gig.findByIdAndDelete(req.params.id)
    .then(() => res.json('Show Deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
}

function index(req, res) {
    Gig.find()
        .then(gigs => res.json(gigs))
        .catch(err => res.status(400).json('Error: ' + err))
}

function create(req, res) {
    const username = req.body.username;
    const venue = req.body.venue;
    const band = req.body.band;
    const duration = req.body.duration;

    const newGig = new Gig({
        username,
        venue,
        band,
        duration,
    })

    newGig.save()
    .then(() => res.json("Gig Added!"))
    .catch(err => res.status(400).json('Error: ' + err))
}