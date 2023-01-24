const express =require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const { response } = require("express")
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/balok", (req,res) => {
    let panjang=  Number(req.body.panjang)
    let lebar= Number(req.body.lebar)
    let tinggi= Number(req.body.tinggi)
    let luas= 2* (panjang*lebar+ lebar*tinggi+ panjang*tinggi)
    let volume= panjang*lebar*tinggi
    

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas: luas,
        volume: volume
    }
    res.json(response)
})


app.listen(8000, () =>{
    console.log("Server run on port 8000")
})

