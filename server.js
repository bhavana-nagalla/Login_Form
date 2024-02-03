const express=require('express');
const mongoose=require('mongoose');
const Register=require('./model');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors({
    origin:'*'
}))

mongoose.connect("mongodb+srv://bhavana:E1GQwcjNjtpZdOst@cluster0.nfap5ac.mongodb.net/").then(
    ()=>console.log("DB Connected")
).catch(err=>console.log(err));

app.post('/adduser',async(req,res)=>{
    
    try{
        const {username,email,mblno,password,confirmpassword}=req.body;
        let exist=await Register.findOne({email})
        if(exist){
            return res.send('User Already Exists')
        }
        if(password != confirmpassword){
            return res.send('Passwords are not matching');
        }
            
        const User=new Register({
            username,
            email,
            mblno,
            password,
            confirmpassword
        });
        await User.save();
        return res.send('Registered Successfully');

    }
    catch(err){
        console.log(err.message);
        return res.send('Internal server error');
    }
})

app.get('/getusers',async (req,res)=>{
    try{
        return res.json(await Register.find());
    }
    catch(err){
        console.log(err.message);
    }
})

app.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body;
        let exist=await Register.findOne({email})
        if(!exist){
            return res.send('User not found');
        }
        if(exist.password != password){
            return res.send('Invalid credentials');
        }
        return res.send(['Login successfull',exist.username]);
    }
    catch(err){
        console.log(err);
        return res.send('server error')
    }
})

app.post('/')

app.get('/getuser/:id',async (req,res)=>{
    try{
        return res.json(await Register.findById(req.params.id));
    }
    catch(err){
        console.log(err.message);
    }
})

app.delete('/deluser/:id',async (req,res)=>{
    try{
        await Register.findByIdAndDelete(req.params.id);
        return res.json(await Register.find());
    }
    catch(err){
        console.log(err.message);
    }
})

app.listen(2000,()=>console.log("server running..."));