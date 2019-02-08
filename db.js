
const Sequelize =require('sequelize')

const db=new Sequelize('shopdb','paras','paras',{
host:'localhost',
dialect: 'mysql',
operatorsAliases: false,
pool: {
    min:0,
    max:5,
}
})

const User=db.define('users',{ 
        id: {type:Sequelize.INTEGER,
            autoIncerement:true,
            primaryKey:true
        },

        name: {type:Sequelize.STRING,
        allowNull:false,
    }
})

const Product=db.define('products',{
     id: {
         type:Sequelize.INTEGER,
         autoIncerement:true,
         primaryKey:true
       },
       name: Sequelize.STRING, //no need of braces and'type' when no constraint is present
       manufacturer: Sequelize.STRING,
       price:{
           type:Sequelize.INTEGER,
           allowNull:false,
           defaultValue:0.0
        }

})

db.sync()
.then(() =>console.log("database has been synced"))
.catch(()=>console.error("error creating database"))

exports = module.exports={
    User,Product
}
//then start creating api