import { Schema, model } from "mongoose";



const employeeSchema = new Schema({
 name: String,
 salary: Number,
 age: Number,
 branch: {
  enum: ["RnD","Human Resource","Marketing"],
 type: String},
})

const EmployeeModel = model('User', employeeSchema);

export {EmployeeModel}