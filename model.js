const mongoose=require('mongoose');

const Register=mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mblno:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Register',Register);