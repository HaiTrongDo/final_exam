import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./src/router/router";
import expressLayouts from 'express-ejs-layouts';


const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.set('views', './src/views');
app.use(expressLayouts);
app.set('layout','./layouts/layout');
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




const DB_URL = 'mongodb+srv://root:Password@nodeexpressprojects.mhhzvbj.mongodb.net/final_exam?retryWrites=true&w=majority';

app.use('/',router)






mongoose.connect(DB_URL)
 .then(() => console.log('DB Connected!'))
 .catch(error => console.log('DB connection error:', error.message));



app.listen(PORT, () => {
 console.log("App running on port: "+ PORT)
})
