"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_model_1 = require("../schemas/employee.model");
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.render('home');
});
router.post('/add/employee', (req, res, next) => {
    let newEmployee = new employee_model_1.EmployeeModel(req.body);
    newEmployee.save().then(() => {
        console.log('Tao thanh cong');
        res.redirect("/employee/list");
    }).catch((e) => {
        console.log(e.message);
    });
});
router.get('/employee/list', async (req, res, next) => {
    try {
        const employeeList = await employee_model_1.EmployeeModel.find().sort("age");
        res.render('list', { employeeArray: employeeList });
    }
    catch (err) {
        console.log(err.message);
    }
});
router.get('/employee/edit', async (req, res, next) => {
    try {
        let currentUser = await employee_model_1.EmployeeModel.findOne({ _id: req.query });
        res.render('edit', { employee: currentUser });
    }
    catch (err) {
        console.log(err.message);
    }
});
router.post('/employee/edit', async (req, res, next) => {
    try {
        let currentUser = await employee_model_1.EmployeeModel.findOneAndUpdate({ _id: req.body._id }, {
            name: req.body.name,
            salary: req.body.salary,
            age: req.body.age,
            branch: req.body.branch
        });
        return res.redirect('/employee/list');
    }
    catch (err) {
        console.log(err.message);
    }
});
router.get('/employee/delete', async (req, res, next) => {
    try {
        console.log(req.query);
        let currentUser = await employee_model_1.EmployeeModel.findOneAndDelete({ _id: req.query._id });
        return res.redirect('/employee/list');
    }
    catch (err) {
        console.log(err.message);
    }
});
exports.default = router;
//# sourceMappingURL=router.js.map