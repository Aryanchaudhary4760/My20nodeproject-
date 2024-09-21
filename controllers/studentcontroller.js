const Student = require('../models/Students');
async function addStudent(req,res){
    try{
        console.log(req.body);
       let student = new Student(req.body);
       await student.save();
       res.render('dataaddedresponse');
    }catch(err){
        console.error(err);
    }
}
async function getStudent(req,res){
    try{
        
        let students = await Student.find({});
        console.log(students,"students");
        res.send(students);
         // async method 
     
    }catch(err){
        console.log(err);
    }
}
module.exports={
    addStudent ,getStudent
}