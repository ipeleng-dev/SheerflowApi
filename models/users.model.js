const mongoose = require('mongoose');

module.exports = mongoose.model('Users',{
    fullname : {type:String},
    surname : {type:String},
    email : {type:String},
    password : {type:String},
    title : {type:String},
    gender : {type:String},
    contact : {type:Number},
    street : {type:String},
    town : {type:String},
    province : {type:String},
    country : {type:String},
})