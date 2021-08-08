const express =require ('express');

const app = express();
require('dotenv/config');
const mongoose=require('mongoose');
const UserRouter=require('./routes/UsersRoute')

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true} ,()=>console.log('db connected'))
app.use(express.json())
app.use('/users',UserRouter)
app.get('/',(req,res)=>{res.send('hi there')})

app.listen(process.env.PORT,()=>console.log(`server is runing on port ${process.env.PORT}`))