const db = require('./database');

const Registration = {
    create: (data, callback) => {
        const { Name, Email, DateOfBirth, PhoneNumber } = data;
        db.query(
            'INSERT INTO Registration (Name, Email, DateOfBirth, PhoneNumber) VALUES (?, ?, ?, ?)',
            [Name, Email, DateOfBirth, PhoneNumber],
            callback
        );
    },

    findAll: (callback) => {
        db.query('SELECT * FROM Registration', callback);
    },

    findById: (id, callback) => {
        db.query('SELECT * FROM Registration WHERE ID = ?', [id], callback);
    },

    update: (id, data, callback) => {
        const { Name, Email, DateOfBirth, PhoneNumber } = data;
        db.query(
            'UPDATE Registration SET Name = ?, Email = ?, DateOfBirth = ?, PhoneNumber = ? WHERE ID = ?',
            [Name, Email, DateOfBirth, PhoneNumber, id],
            callback
        );
    },

    delete: (id, callback) => {
        db.query('DELETE FROM Registration WHERE ID = ?', [id], callback);
    },
};

module.exports = Registration;
