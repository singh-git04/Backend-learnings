import app from "./src/app.js"
import {response as result} from "./src/services/model.ai.js"

app.listen(3000,()=>{
    console.log('Server is running on Port')
})


console.log(result.text)


