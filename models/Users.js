const mongoose=require('mongoose');


const UserShema=mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    subscribtation_Date:{
        type: Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('User',UserShema);