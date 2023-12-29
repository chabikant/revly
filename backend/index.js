const express = require("express");
const app = express();
// const {connectDB }=require("./db");
// connectDB();
const dobutsRoutes = require('./src/doubts/routes');
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("hello world")
})



app.use("/api/v1",dobutsRoutes);


app.listen(8800, () => {
  console.log("Backend server is running!");
});
