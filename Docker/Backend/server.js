import express from "express"


const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({
        message: "Hello World"
    })
})

app.get('/api/data',(req,res)=>{

    const data = {
        id: 1,
        name: "Sample Data",
        description:"This is sample data"
    }
    res.status(200).json(data)
})

app.get('/api/health',(req,res)=>{
    res.status(200).json({status: 'OK', timestamp: new Date()})
})


app.listen(3000,()=>{
    console.log('Server is running')
})