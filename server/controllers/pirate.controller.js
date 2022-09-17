const { Pirate } = require('../models/pirate.model');

module.exports.findAll = (req, res) => {
    Pirate.find().sort({pirate_name: 1})
        .then( pirates => res.status(200).json(pirates))
        .catch(err => res.status(400).json({ message: 'There has been a findAll controller error', error: err}))
}

module.exports.findOne = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then( pirate => res.status(200).json(pirate))
        .catch(err => res.status(400).json({ message: 'There has been a findOne controller error', error: err}))
}

module.exports.createNew = (req, res) => {
    Pirate.create(req.body)
        .then( pirate => res.status(200).json(pirate))
        .catch(err => res.status(400).json({ message: 'There has been a create controller error', error: err}))
}

module.exports.update = (req, res) => {
    Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then( pirate => res.status(200).json(pirate))
        .catch(err => res.status(400).json({ message: 'There has been a updateOne controller error', error: err}))
}

module.exports.delete = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then( res => res.status(200).json(res))
        .catch( err => res.json({ message: 'There has been a delete controller error', error: err}))
}
