const express = require('express');
const testcaseRouter = express.Router();
const testcase = require('../model/testcase');

//read
testcaseRouter.get('/',(req,res)=>{
    testcase.find({},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to get Testcase",
                msgError : true
            }});
        else{
            res.status(200).json({response});
        }
            
    });
});

testcaseRouter.get('/:id',(req,res)=>{
    testcase.find({ index : req.params.id },(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to get Testcase",
                msgError : true
            }});
        else{
            res.status(200).json({response});
        }
            
    });
});

testcaseRouter.post('/',(req,res)=>{
    const Testcase = new testcase(req.body[0]);
    console.log(Testcase)
    Testcase.save((err,document)=>{
        if(err){
            console.log("Unable to add Testcase")   
            res.status(500).json({message:{
                msgBody : "Unable to add Testcase",
                msgError : true
            }});
        }
        else{
            console.log("Successfully Added Testcase") 
            res.status(200).json({message:{
                msgBody: "Successfully Added Testcase",
                msgError : false
            }});
        }
    });
});


module.exports = testcaseRouter;