var mongoose = require('../DBSchema/SchemaMapper');
var StudentScema = mongoose.model('Student');

var StudentController = function(){

    this.addStudent = (data) => {
        return new Promise((resolve,reject)=>{
            StudentScema.create(data).then(()=>{
                resolve({status:200,message:'Successfully added new student'});
            }).catch(err=>{
                reject({status:500,message:'Err : '+err});
            })
        })
    }

    this.findStudents = () => {
        return new Promise((resolve,reject)=>{
            StudentScema.find().exec().then((data)=>{
                resolve({status:200,data:data});
            }).catch(err=>{
                reject({status:500,message:'Err : '+err});
            })
        })
    }

    this.findStudent = (id) => {
        return new Promise((resolve,reject)=>{
            StudentScema.find({stu_id:id}).exec().then((data)=>{
                resolve({status:200,data:data});
            }).catch(err=>{
                reject({status:500,message:'Err : '+err});
            })
        })
    }
};

module.exports=new StudentController();