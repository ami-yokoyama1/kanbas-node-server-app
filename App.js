import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from './Users/routes.js';
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors());
CourseRoutes(app);
app.use(express.json());
ModuleRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);
app.listen(process.env.PORT ||4000);