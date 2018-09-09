const mongoose = require("../DBSchema/SchemaMapper");
const CompanySchema = mongoose.model('Company');

var CompanyController = function(){

    this.addCompany = (data) =>{
        return new Promise((resolve ,reject)=>{
           CompanySchema.create(data).then((res)=>{
               resolve({status:200,message:'Successfully added new company',data:res});
           }).catch(err=>{
               reject({status:500,message:'Err '+err});
           })
        });
    }

    this.getCompany = (id) =>{
        return new Promise((resolve ,reject)=>{
            CompanySchema.find({_id:id}).exec().then((data)=>{
                resolve({status:200,data:data});
            }).catch(err=>{
                reject({status:500,message:'Err '+err});
            })
        });
    }

}

module.exports = new CompanyController();