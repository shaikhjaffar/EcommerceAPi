const mongoose = require("mongoose")

const Productschema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    quantity:{
        type :String,
        required:true
    },
})

module.exports = mongoose.model("Products",Productschema)