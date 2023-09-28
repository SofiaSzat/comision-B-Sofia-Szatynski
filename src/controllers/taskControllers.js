import { taskModel } from "../models/tasks.js"

//controlador para traer todos
 export const ctrlGetTasks= async (req, res) => {
    try {
        const posteos= await taskModel.findAll();

        if (!posteos) return res.status(404)
        return res.status(200).json(posteos)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message:'Error del servidor'
        })
    }
 }
 
//controlador para crear
 export const ctrlCreateTask= async (req,res) => {

    try{
        const newPost = await taskModel.create(req.body)
        return res.status(201).json(newPost)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message:'Error del servidor'
        })
    }

} 
//controlador eliminar
 export const ctrlDeleteTask= async(req,res) =>{
    const { id } = req.params
    try {
        const deletedPost= await taskModel.destroy({
            where: {
                id:id
            }
        })
        if (!deletedPost){
            return res.status(404).json({
                message:'Posteo no encontrado'
            })
        }
            return res.status(200).json ({
                message:'Posteo eliminado'
            })
        } catch (error){
            console.error(error)
            return res.status(500).json({
                message:'Error del servidor'
            })
        }
    }