//aca definimos la tabla de la base de datos

//tabla para posteo 

import { DataTypes } from "sequelize";
import { sequelize } from "../conf/database.js";

export const taskModel = sequelize.define('posteos',{
    titulo: {
        type: DataTypes.STRING,
        allowNull:true
    },
    image: {
        type: DataTypes.STRING,
        allowNull:true
    },
    posteo: {
        type: DataTypes.STRING,
        allowNull:true
    }
}, {
    timestamps: true

})


