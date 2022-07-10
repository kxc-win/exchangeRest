//引入mongoose
const mongoose = require('mongoose');
//声明一个叫Schema的架构
const Schema = mongoose.Schema;

//定义TaskSchema的架构
const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

//导出一个叫Tasks模型
module.exports = mongoose.model('Tasks', TaskSchema);

