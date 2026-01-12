import { DataTypes} from "sequelize"
import { sequelize } from "./app.js"



const Course = sequelize.define("courses" ,{
    id:{type :DataTypes.INTEGER ,primaryKey:true ,autoIncrement:true } ,
    name:{type :DataTypes.STRING ,allowNull:false} ,
    hours:{type :DataTypes.INTEGER ,allowNull:false} ,
    is_active:{type:DataTypes.BOOLEAN ,defaultValue:true}
})

export default Course
