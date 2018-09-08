const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignSchema = new Schema({

  supname:{  type:String,required:true  },
  stdname:{type:String,required:true},
  stdid:{type:String,required:true},
  date:{type:Date},
	position:{type:String},
  email:{type:String,required:true},
  compname:{type:String,required:true},
  project:{type : String},
  duration:{type : Number,required:true}



});
const UserDB = mongoose.model('schema',AssignSchema);
module.exports=UserDB;
