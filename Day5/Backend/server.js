/* 
    Start Server
    Connect to DataBase
 */

require("dotenv").config()
const app = require('./src/app')
const connectToDb = require('./src/config/dataBase')

connectToDb()



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    
})
