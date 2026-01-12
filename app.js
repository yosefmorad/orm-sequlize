import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
//חיבור לDB
export const sequelize = new Sequelize(
  //חיבור של ORM לMYSQL ל
  "mosh",
  "root",
  "1234",

  //איפנ נמצא הmy

  {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  }
);
//יצירת סכמה
const Course = sequelize.define("courses", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  hours: { type: DataTypes.INTEGER, allowNull: false },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
});

//הפעלת לחיבור ויצירת טבלה
async function start() {
  try {
    const y = await sequelize.authenticate();

    let i = await sequelize.sync();
  } catch (err) {
    console.log(err.message);
  }
}

await start();

async function add() {
  const con = await Course.create({
    name: "ooooooooooooooooooooooooo",
    hours: 666,
    is_active: true,
  });
  // console.log(con);
}
add();

const users = await Course.findAll();
console.log(users);



async function getActiveCourses() {
    // const u = []
  const l = await Course.findAll(
    {
      where: {
        is_active: true,
      },
    },
    
  );
//   u.push(l)
  console.log(l)
}

getActiveCourses();
