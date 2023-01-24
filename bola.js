const express =require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const { response } = require("express")
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/bola", (req, res) => {
    let jari = Number(req.body.jari);
    let volume = (4 / 3) * Math.PI * jari * jari * jari;
    let luas = (4 / 3) * Math.PI * jari * jari;
    let response = {
        jari:jari,
      volume: volume,
      luas: luas,
    }
    res.json(response)
}
)


app.listen(8000, () =>{
    console.log("Server run on port 8000")
})

