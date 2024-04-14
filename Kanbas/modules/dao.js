import {moduleModel} from './model.js';
export const findAllModules = () => moduleModel.find();
export const findModuleById = (id) => moduleModel.findOne({id: id});
export const createModule = (module) => moduleModel.create(module);
export const updateModule = (id, module) => 
    moduleModel.updateOne({_id: id}, {$set: module});
export const deleteModule = (id) => moduleModel.deleteOne({_id: id});