const express =require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const { response } = require("express")
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/kubus", (req,res) => {
    let rusuk=  Number(req.body.rusuk)
    let luas= 6*rusuk
    let volume= rusuk*rusuk*rusuk
    

    let response = {
        rusuk: rusuk,
        luas: luas,
        volume: volume
    }
    res.json(response)
})


app.listen(8000, () =>{
    console.log("Server run on port 8000")
})

