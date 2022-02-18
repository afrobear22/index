const mongoose = require('mongoose');

const Resident = mongoose.model('residents', {
    name: { type: String, index: true, unique: true },
    hasCar: Boolean,
    isBoomer: Boolean,
});
mongoose.Types.ObjectId
module.exports = Resident;