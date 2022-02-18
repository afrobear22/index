const mongoose = require('mongoose');

const Resident = mongoose.model('residents', {
    _id: String,
    name: String,
    hasCar: Boolean,
    isBoomer: Boolean,
});

module.exports = Resident;