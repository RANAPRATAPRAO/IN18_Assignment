const Registration = require('../models/registrationModel');

exports.create = (req, res) => {
    Registration.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Registration created successfully', id: result.insertId });
    });
};

exports.getAll = (req, res) => {
    Registration.findAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.getById = (req, res) => {
    const { id } = req.params;
    Registration.findById(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Registration not found' });
        res.status(200).json(result[0]);
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    Registration.update(id, req.body, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Registration updated successfully' });
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;
    Registration.delete(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Registration deleted successfully' });
    });
};
