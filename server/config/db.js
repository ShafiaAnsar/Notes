const mongoose = require('mongoose')
mongoose.set('strictQuery',false)


const connectdb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database Connected ${connect.connection.host}`)
    } catch (error) {
        
    }
}

module.exports = connectdb