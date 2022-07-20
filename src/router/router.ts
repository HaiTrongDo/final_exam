import express from "express";
import {EmployeeModel} from "../schemas/employee.model"
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home')
})


router.post('/add/employee', (req, res, next) => {

    let newEmployee = new EmployeeModel(req.body)
    newEmployee.save().then(() => {
        console.log('Tao thanh cong')
        res.redirect("/employee/list")
    }).catch((e) => {
        console.log(e.message);
    })
})


router.get('/employee/list',async (req, res, next) => {
  try {
    const employeeList = await EmployeeModel.find().sort("age")
      res.render('list',{employeeArray:employeeList})
  }catch (err) {console.log(err.message)}
})

router.get('/employee/edit',async (req, res, next) => {
  try {
      let currentUser = await EmployeeModel.findOne({_id:req.query})
      // console.log(currentUser);
      res.render('edit',{employee:currentUser})
  }catch (err) {console.log(err.message)}
})

router.post('/employee/edit',async (req, res, next) => {
  try {

      let currentUser = await EmployeeModel.findOneAndUpdate({_id:req.body._id}, {
          name:req.body.name,
          salary:req.body.salary,
          age:req.body.age,
          branch:req.body.branch
      })
       return res.redirect('/employee/list')
  }catch (err) {console.log(err.message)}
})

router.get('/employee/delete',async (req, res, next) => {
  try {
      console.log(req.query);
      let currentUser = await EmployeeModel.findOneAndDelete({_id:req.query._id})
      return res.redirect('/employee/list')
  }catch (err) {console.log(err.message)}
})

export default router