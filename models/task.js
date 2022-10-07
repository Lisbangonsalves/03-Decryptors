const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    taskname:{
        type: String,
    },
    duedate:{
        type: date,
    },
    duetime:{
        type: String,
    },
    priority:{
        type:String
    },
    status:{
        type:String,
    },

    



});
const Task = mongoose.model('task', taskSchema);

module.exports = Task;