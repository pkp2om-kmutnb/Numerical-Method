const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testcaseSchema = new Schema({
    index :{
        type : String,
        required : true,
        unique: true
    },
    name_type :{
        type : String,
        required : true
    },
    name_method :{
        type : String,
        required : true
    },
    datas :[]
});

module.exports = mongoose.model('testcase',testcaseSchema);