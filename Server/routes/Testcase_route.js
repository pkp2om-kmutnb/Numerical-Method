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

//read with index
testcaseRouter.get('/:index',(req,res)=>{
    testcase.find({ index : req.params.index },(err,response)=>{
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


//read with name_type && name_method
testcaseRouter.get('/:name_type/:name_method',(req,res)=>{
    testcase.find({ name_type : req.params.name_type ,name_method : req.params.name_method },(err,response)=>{
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

// create
testcaseRouter.post('/',(req,res)=>{
    console.log(Testcase)
    //const Testcase = new testcase(req.body[0]);
    /*Testcase.save((err,document)=>{
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
    });*/
});

// delete
testcaseRouter.delete('/:id',(req,res)=>{
    testcase.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Delete Testcase",
                msgError : true
            }});  
        else
            res.status(200).json({message:{
                msgBody: "Successfully Deleted Testcase",
                msgError : false
            }});     
    });
});

//update 
testcaseRouter.put('/:index',(req,res)=>{
    testcase.findOneAndUpdate({index : req.params.index},req.body,{runValidators: true},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Update Testcase",
                msgError : true
            }});
        else
        res.status(200).json({message:{
            msgBody: "Successfully Updated Testcase",
            msgError : false
        }});   
    });
});


module.exports = testcaseRouter;