const express = require("express")     // require express 

const app = express()               // call express and store in a variable

app.get('/', (req,res)=>{           // send respone on server
    res.send('Hello world')
})

app.get('/about', (req,res)=>{         // no visible changes as node doesn't redirect and show                          visiblechanges so install nodemon to see simultenous changes
    res.send("Helo from about")
})

app.get('/product',(req, res)=>{
    res.send("hello from product")
})

app.listen(3000)                    // run server 

