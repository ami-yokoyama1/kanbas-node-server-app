//uses schema to create api that talks to objects of type courses

import mongoose from "mongoose";
import courseSchema from "./schema.js";
export const courseModel = mongoose.model("Courses", courseSchema);
export default courseModel;