"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./src/router/router"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const PORT = 3000;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set('views', './src/views');
app.use(express_ejs_layouts_1.default);
app.set('layout', './layouts/layout');
app.use(express_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const DB_URL = 'mongodb+srv://root:Password@nodeexpressprojects.mhhzvbj.mongodb.net/final_exam?retryWrites=true&w=majority';
app.use('/', router_1.default);
mongoose_1.default.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
//# sourceMappingURL=index.js.map