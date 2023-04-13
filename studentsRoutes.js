import { Router } from "express";
 import  {students} from "../database/studentsArray.js";
 import{studentmodel} from "../database/studentModel.js"
 import { faker } from '@faker-js/faker';
const router=new Router();
router.get("/",async(req,res)=>{
    const students=await studentmodel.find().lean();
    res.render("students" ,{ students});
});
router.get("/create",(req,res)=>{
  
    const studentsArray=[];
    for(let i=0;i<=100;i++){

        studentsArray.push({
            name:faker.name.firstName()
        });
    }
        studentmodel.create(students)
    res.send("Done")
});
router.get("/update",(req,res)=>{
    
});
router.get("/delete",(req,res)=>{
    
});
router.get("/:id",(req,res)=>{
     
});
export default router;