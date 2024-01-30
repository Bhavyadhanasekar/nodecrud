const express=require('express'),
    router=express.Router()

//const db=require('../db')
const service =require('../service/std.service')
//http://localhost:3005/api/students/
router.get('/',async(req,res)=>{
    const rows= await service.getAllstudents()
    res.send(rows)
    
})

router.get('/:id',async(req,res) => {
    const employe = await service.getstudentsById(req.params.id)
    res.send(employe);
})

router.delete('/:id',async(req,res)=>{
    const delete_id = await service.DeletestudentsBYID(req.params.id)
    res.send(delete_id);
})

router.post('/',async(req,res)=>{
     await service.addoreditstudents(req.body)
    res.send(201).send('created successfully');
})


module.exports=router;