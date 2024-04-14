import db from "../Database/index.js";
import * as dao from "./dao.js";

function ModuleRoutes(app) {
  //deleting a module
  app.delete("/api/modules/:mid", async (req, res) => {
    const {mid} = req.params;
    const modules = await dao.deleteModule(mid);
    res.send(modules);
    
    // const { mid } = req.params;
    // db.modules = db.modules.filter((m) => m._id !== mid);
    // res.sendStatus(200);
  });
  
  //creating a module - async is not working
  app.post("/api/courses/:cid/modules", (req, res) => {
    // const { cid } = req.params;
    // const newModule = await dao.createModule(cid, req.body);
    // res.send(newModule);
    
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.modules.push(newModule);
    res.send(newModule);
  });
  //get module for a course
  app.get("/api/courses/:cid/modules", async(req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModuleById(cid);
    res.send(modules);

    // const { cid } = req.params;
    // const modules = db.modules
    //   .filter((m) => m.course === cid);
    // res.send(modules);
  });
  //updating a module
  app.put("/api/modules/:mid", async(req, res) => {
    const {mid} = req.params;
    const module = await dao.updateModule(mid, req.body);
    res.send(module);

  //   const { mid } = req.params;
  //   const moduleIndex = db.modules.findIndex(
  //     (m) => m._id === mid);
  //   db.modules[moduleIndex] = {
  //     ...db.modules[moduleIndex],
  //     ...req.body
  //   };
  //   res.sendStatus(204);
  });
}
export default ModuleRoutes;