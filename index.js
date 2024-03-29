const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/register',async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    // to remove the password from responce object
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post('/login',async (req,res)=>{
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send({result:"No user Found"});
        }
    }else{
        res.send({result:"No user Found"});
    }
})

app.post('/add-product',async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})
app.listen(5000,()=>{
    console.log("Server Started On Port 5000");
})