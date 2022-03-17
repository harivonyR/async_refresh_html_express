const express = require ('express')
const app = express()

app.use(express.static('public'))

// Mock data
const data = {
    headers:['name','location','description'],
    rows: new Array(10).fill(undefined).map((e,i)=>{
        return [
            "my self "+i,
            "tsiadana",
            "little description here"
        ]
    })
}

console.log(data)

// Data endpoint
app.get('/data',(req,res)=>{
    res.json({
        headers : data.headers,
        rows : data.rows
    })
})

let port = 3000
app.listen(port,()=>{
    console.log('Listen on port '+port)
})