const express = require("express");
const mongoose=require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json())
const connect = ()=>{
    return mongoose.connect("mongodb+srv://vishnu:vishnu_123@cluster0.zkps2.mongodb.net/HomeAndAppliances")
}


// const userSchema = new mongoose({
//     id :{type:Number,required:true},
//     lastName :{type:String,required:false},
//     age:{type:Integer,required:true},
//     email:{type:String,required:true},
//     profileImages:{type:String,required:true}

// },
// {versionKey:false,
// timestamps:true}
// )

const postSchema = new mongoose.Schema({
   productName :{type:String,required:true},
   productImages :[{type:String,required:false}],
   brandName :{type:String,required:false},
   productId :{type:String,required:true},
   rating :{type:String,required:true},
   price1 :{type:String,required:true},
   price2 :{type:String,required:false},
   price3 :{type:String,required:false},
   offer :{type:String,required:false},
   meterial :{type:String,required:false},
   categories :[{type:String,required:false}],
   productDescription :{type :String,required:false},
 

},
{versionKey:false,
    timestamps:true}


)


// const postLikeSchema = new mongoose({
//     id:{type:Number,required:true},
   
// })
// const commentSchema = new mongoose({
//     id:{type:Number,required:true},
//     body:{type:Number,required:true},
// },
//     {versionKey:false,
//     timestamps:true}
// )

let DinnerSets;
try{
    DinnerSets=mongoose.model("DinnerSets",postSchema);

}catch(e){
    console.log("error",e.message)
}

// app.get("/users",async (req,res)=>{
//     const users = await userSchema.find().lean().exec();
//     res.status(200).send(users);
// })

app.post("/DinnerSets",async (req,res)=>{
    try{
        const kitchen=await DinnerSets.create(req.body);
        return res.status(201).send(kitchen);
        // res.send("strig)
    }catch(e){
      return res.status(500).send(e.message);

    }
})
app.get("/DinnerSets/:id",async (req,res)=>{
    try{
        const kitchen =await DinnerSets.findById(req.params.id).lean().exec();
        return res.status(201).send(kitchen);
    }catch(e){
      return res.status(500).send(e.message);
    }
})

app.get("/DinnerSets",async (req,res)=>{
    try{
        const kitchen =await DinnerSets.find().lean().exec();
        return res.status(201).send(kitchen);
    }catch(e){
      return res.status(500).send(e.message);
    }
})

app.listen(4456, async function(){
    try{
        await connect();
        console.log("listening on port 4456");
    }catch(e){
        console.log("some errror",e)
    }
})


// app.patch("/users/:id",async (req,res)=>{
//     try{
//         const user =await User.findById(req.params.id,req.body).lean().exec();
//     }catch(e){
//       return res.status(500).send(e.message);
//     }
// })

// app.delete("/users/:id",async (req,res)=>{
//     try{
//         const user =await User.findByIdAndDelete(req.params.id).lean().exec();
//     }catch(e){
//       return res.status(500).send(e.message);
//     }
// })



