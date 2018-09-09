var express = require('express');
var router = express.Router();
var controller = require('./Student.Controller');

router.post('/',(req,res)=>{
    controller.addStudent(req.body).then(data=>{
        res.status(data.status).json(data.message);
    }).catch(err=>{
        res.status(err.message).json(err.message);
    })
});

router.get('/',(req,res)=>{
    controller.findStudents().then((data)=>{
        res.status(data.status).json(data.data);
    }).catch(err=>{
        res.status(err.message).json(err.message);
    })
});

router.get('/:_id',(req,res)=>{
    controller.findStudent(req.params._id).then((data)=>{
        res.status(data.status).json(data.data);
    }).catch(err=>{
        res.status(err.message).json(err.message);
    })
});

module.exports = router;