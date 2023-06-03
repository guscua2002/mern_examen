const Pets = require("../models/pets.model");

module.exports.findAllUsers = (req, res) => {
    Pets.find()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.status(400).json({ error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
	Pets.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ user: oneSingleUser }))
		.catch(err => res.status(400).json({ error: err }));
};

module.exports.createNewUser = (req, res) => {
    Pets.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.status(400).json({ error: err }));
};

module.exports.updateExistingUser = (req, res) => {
    Pets.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.status(400).json({ error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
    Pets.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.status(400).json({ error: err }));
};

