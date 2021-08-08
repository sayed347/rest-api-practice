const express=require('express');
const router=express.Router();
const User=require('../models/Users')

router.get('/',(req,res)=>{
    const users=User.find()
    
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
    
})
router.post('/',(req,res)=>{
    const user=new User({
        name:req.body.name,
        age:req.body.age
    });
    user.save()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
    
})
router.delete('/:id',(req,res)=>{
    User.remove({_id:req.params.id}).then(data=>res.json(data)).catch(err=>res.json(err))
})
router.put('/:id',(req,res)=>{
    User.updateOne({_id:req.params.id},{$set:{name:req.body.name}}).then(data=>res.json(data)).catch(err=>res.json(err))
})




module.exports=router;