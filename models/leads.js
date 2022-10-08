const mongoose = require('mongoose');
const { Schema } = mongoose;

const LeadSchema = new Schema({
    leadOwner: {
        type: String,
    },
    firstName: {
        type: String,
    },
    title: {
        type: String,
    },
    mobile: {
        type: String,
    },
    leadSource: {
        type: String,
    },
    company: {
        type: String,
    },
    annualRevenue: {
        type: String,
    },
    lastName: {
        type: String,
    },
    leadEmail: {
        type: String,
    },
    webite: {
        type: String,
    },
    numberOfEmployee: {
        type: Number,
    },
    rating: {
        type: String,
    },
    street: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    zipcode: {
        type: String,
    },
    description: {
        type: String,
    },
    attachment: {
        type: Array,
    },
    userId:{
        type:String,
    }

});
const Lead = mongoose.model('lead', LeadSchema);

module.exports = Lead;