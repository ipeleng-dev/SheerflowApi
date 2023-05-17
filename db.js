const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://amin:1234@cluster0.ex1znfq.mongodb.net/users_db?retryWrites=true&w=majority';



module.exports = () =>{
    return mongoose.connect(dbUri,{useNewUrlParser:true, useUnifiedTopology:true});
}

