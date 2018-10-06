var express= require('express');
var app    = express();
const User = require('../Model/user.model');
var jwt    = require('jsonwebtoken');
// app.set('superSecret', config.secret);
/**
 * add new users
 * @param req
 * @param res
 * @returns {*|void}
 */
exports.create = function(req, res) {
    if(!req.body.username|| !req.body.password ||!req.body.userRole) {
        return res.status(400).send({
            message: "User content can not be empty"
        })
    }
    else{



        User.findOne({username : req.body.username}, function (err, user) {
            if (err){
                res.send(err);
            }else if(user){
               res.status(400).send({
                   message:"A user with that username has already registered. Please use a different username.."
               })
            }
            else{
                const user = new User({
                    username: req.body.username,
                    password: req.body.password,
                    userRole:req.body.userRole
                });
                // Save user in the database
                user.save()
                    .then(function(data){
                        res.status(200).send({
                            "message":"Successfully added user"
                        });
                    }).catch(function(err){
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the user."
                    });
                });
            }
        });

    }

};

/**
 * validating user login and generate a token
 * @param req
 * @param res
 */
exports.validate=function(req,res){
    User.findOne({
        username: req.body.username
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            console.log('no User');
            res.status(404).json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.status(500).json({success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                // const payload = {
                //     user: user.username
                // };
                //
                // var token = jwt.sign(payload, app.get('superSecret'), {
                //     expiresIn: 300 // expires in 24 hours
                // });

                res.status(200).json({
                    success: true,
                    username: user.username,
                    userRole:user.userRole,
                    // token: token
                });
            }

        }

    });
}