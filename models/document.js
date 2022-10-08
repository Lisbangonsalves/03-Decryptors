const mongoose = require("mongoose");

const { Schema } = mongoose;

const documentSchema = new Schema({
  name: {
    type: String,
  },
  owner: {
    type: String,
  },
  contact: {
    type: String,
  },
  leads: {
    type: String,
  },
  companies: {
    type: Array,
  },
  deals: {
    type: String,
  },
  uploads: {
    type: Array,
  },
  userId:{
    type:String,
  }
});

const Document = mongoose.model("document", documentSchema);

module.exports = Document;
