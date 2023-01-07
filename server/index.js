import  express, { json }  from "express";
import mongoose from "mongoose";
import  Cors  from "cors";
import User from "./model/User.js";

const app = express()
app.use(express.json())
app.use(Cors())

const PORT = 5000

app.listen(PORT, ()=>{
    console.log("SERVER OK")
})

app.get("/",(req,res)=>res.send("hello server"))

const DB_URL = 'mongodb+srv://MREN:MREN@cluster0.jzydmfw.mongodb.net/protfoilo_data?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("mongoDB conected")
  }).catch(Error=>{
    console.log(Error)
  })

  const AddColor = async ()=>{
    const user = new User({name : "joshwa"
    ,Email:"juttjoshwa@gmail.com"
    ,feedback:"its really good"
    ,project:"i need protfoilo web"})
    try{
     await user.save()
     console.log(user)
    }catch(Error){console.log(Error)}
 }

//  AddColor()


app.get("/user" , async (req, res)=>{
  const user = await User.find({})
  // console.log(json.user)
  res.status(200).json(user)
});


app.post('/adduser', async(req , res) => {
  const addColor =new User(req.body)
  addColor.save();
  res.status(201).json({created: true})
  console.log(addColor)
});