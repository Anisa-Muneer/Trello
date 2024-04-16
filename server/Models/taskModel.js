import mongoose from 'mongoose';

const { Schema, objectId } = mongoose

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },


})

const Task = mongoose.model('Task', taskSchema)

export default Task