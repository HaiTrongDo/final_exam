"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    name: String,
    salary: Number,
    age: Number,
    branch: {
        enum: ["RnD", "Human Resource", "Marketing"],
        type: String
    },
});
const EmployeeModel = (0, mongoose_1.model)('User', employeeSchema);
exports.EmployeeModel = EmployeeModel;
//# sourceMappingURL=employee.model.js.map