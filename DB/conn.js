const mongoose = require('mongoose');


// mongoose.connect(process.env.MONGO_URI).then(() => {
//     console.log("MongoDb Is Connected")
// }).catch((err) => {
//     console.log(`MongoDb Error: ${err}`)
// })

const dataBaseConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("MongoDb Is Connected")
    }).catch((err) => {
        console.log(`MongoDb Error: ${err}`)
    })
}

module.exports = dataBaseConnection;