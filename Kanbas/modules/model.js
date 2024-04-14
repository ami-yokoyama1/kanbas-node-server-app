
import mongoose from 'mongoose';
import moduleSchema from './schema.js';
export const moduleModel = mongoose.model('Modules', moduleSchema);
export default moduleModel;