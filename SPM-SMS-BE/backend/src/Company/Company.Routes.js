var express = require('express');
var router = express.Router();
var controller = require('./Company.Controller');

router.post('/',(req,res)=>{
    controller.addCompany(req.body).then((data)=>{
        res.status(data.status).json(data.data);
    }).catch(err=>{
        res.status(err.status).json(err.message);
    })
});

router.get('/:_id',(req,res)=>{
    controller.getCompany(req.params._id).then((data)=>{
        res.status(data.status).json(data.data);
    }).catch(err=>{
        res.status(err.status).json(err.message);
    })
});

module.exports = router;