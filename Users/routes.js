import * as dao from "./dao.js";
let currentUser = null;
export default function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };

  app.post("/api/users", createUser);
  const deleteUser = async (req, res) => { 
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };

  app.delete("/api/users/:userId", deleteUser);
  const findAllUsers = async (req, res) => { 
      const users = await dao.findAllUsers();
      res.json(users);
    };
  app.get("/api/users", findAllUsers);
  
  const findUserById = async (req, res) => { 
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };
  app.get("/api/users/:userId", findUserById);
  
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    currentUser = await dao.findUserById(userId);
    res.json(status);
  };

  const signup = async (req, res) => { };

  const signin = async (req, res) => { 
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);
  };

  const signout = (req, res) => { };

  const profile = async (req, res) => {
    res.json(currentUser);
  };
  app.post("/api/users/signin", signin);
  app.post("/api/users/profile", profile);
  
  // app.get("/api/users", findAllUsers);
  app.put("/api/users/:userId", updateUser);
  app.post("/api/users/signup", signup);

  app.post("/api/users/signout", signout);
}
