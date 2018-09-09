var express = require('express');
var routes = express.Router();

var StudentRoutes = require('./src/Student/Student.Routes');
var CompanyRoutes = require('./src/Company/Company.Routes');

routes.use('/students',StudentRoutes);
routes.use('/company',CompanyRoutes);

module.exports=routes;