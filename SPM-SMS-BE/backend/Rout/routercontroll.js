const express = require('express');
const router = express.Router();
const UserDB =require('../Model/schema');

router.get('/assign',function (req,res,next) {

    UserDB.find().then(function (user) {
        res.status(200).send(user)
    }).catch(next);

});

router.post('/assign',function (req,res,next) {
    UserDB.create(req.body).then(function (user) {
        res.status(200).send(user);
    }).catch(next);
})

router.put('/assign/:id',function (req,res,next) {
    UserDB.find({stdname:req.params.id}).then(function () {
        UserDB.update({stdname:req.params.id},req.body).then(function () {
           res.send("Updated");
    }).catch(next)
})
});

router.get('/assign/:id',function (req,res,next) {
    UserDB.find({stdname:req.params.id}).then(function (user) {
        res.send(user);
    })
});

router.delete('/assign/:id',function (req,res,next) {
    UserDB.find({stdname:req.params.id}).then(function () {
        UserDB.deleteOne({stddname:req.params.id}).then(function () {
            res.send("deleted");
        })
    }).catch(next);
})

module.exports=router;
