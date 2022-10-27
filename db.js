const mongoose = require('mongoose')
require('dotenv').config()

// const MONGODB_URI = 'mongodb://127.0.0.1:27017/WallabyApp';
const conectarDB = async () => {
  mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true,
    useUnifiedTopology:true,
    }, (err) => {
      if(err){
          console.log("Error en la conexion")
      }else{
          console.log("Database esta conectada")
      }
    }     
  )
};



// const conectarDB = async () => {
//   mongoose.connect(MONGODB_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology:true
//   })
//   .then(db => console.log('Database esta conectada'))
//   .catch(err => console.log('Error::',err));
// }

module.exports = conectarDB