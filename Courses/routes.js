// import Database from "../Kanbas/Database/index.js";
import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    app.get("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = await dao.findCourseById(id);
        // const course = Database.courses
        //   .find((c) => c._id === id);
        // if (!course) {
        //   res.status(404).send("Course not found");
        //   return;
        // }
        res.send(course);
      });    

    //updating a course (4.2.4) -- this is not working
    app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = await dao.updateCourse(id, req.body);
        res.send(course);
        
        // const { id } = req.params;
        // const course = req.body;
        // Database.courses = Database.courses.map((c) =>
        //   c._id === id ? { ...c, ...course } : c
        // );
        // res.sendStatus(204);
      });    
      

    app.delete("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const courses = await dao.deleteCourse(id);
        res.send(courses);

        // const { id } = req.params;
        // Database.courses = Database.courses
        //   .filter((c) => c._id !== id);
        // res.sendStatus(204);
      });    

    app.post("/api/courses", async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.send(course);

        // const course = { ...req.body,
        //   _id: new Date().getTime().toString() };
        // Database.courses.push(course);
        // res.send(course);
    });    


    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.send(courses);
    });
}
