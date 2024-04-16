import mongoose from "mongoose";

export default mongoose.Schema({
    _id: String,
    id: String,
    name: String,
    description: String,
    course: String,
    lessons: Array(3),
},
{collection: "modules"});