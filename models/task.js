const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    taskName:{
        type: String,
    },
    dueDate:{
        type: String,
    },
    dueTime:{
        type: String,
    },
    priority:{
        type:String
    },
    status:{
        type:String,
    },
    userId:{
        type:String,
    }
});
const Task = mongoose.model('task', taskSchema);

module.exports = Task;