const express =require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const { response } = require("express")
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.post("/limas", (req, res) => {
    let alas = Number(req.body.alas);
    let tinggi = Number(req.body.tinggi);
    let luas =(1/2)*alas*tinggi
    let volume = (1 / 3) * luas*tinggi
    let response = {
        alas:alas,
        tinggi:tinggi,
        luas:luas,
        volume:volume
    }
    res.json(response)
}
)


app.listen(8000, () =>{
    console.log("Server run on port 8000")
})

