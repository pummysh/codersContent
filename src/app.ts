import express from "express";
import { createDatabaseConnection } from "./database/connection";

const app=express();
app.use(express.json())

app.listen(2345,async()=>{
    console.log("listening on server 2345")
   try{
    await createDatabaseConnection()
   }catch(err){
    console.log(err,"errr")
   }
})

