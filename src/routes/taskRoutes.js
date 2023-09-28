import { Router } from "express";
import { ctrlCreateTask, ctrlGetTasks,ctrlDeleteTask } from "../controllers/taskControllers.js"; 
import { ctrlCreateEsq } from "../models/esquema/taskEsque.js";
import { validator } from "../middlewares/validador.js";
import { taskModel } from "../models/tasks.js";


const taskRouter= Router();

//endpoints
taskRouter.get('/api/posteo', ctrlGetTasks)


taskRouter.post('/api/posteo', ctrlCreateEsq, ctrlCreateTask, validator)


taskRouter.delete('/api/posteo/:id', ctrlDeleteTask)

export { taskRouter }