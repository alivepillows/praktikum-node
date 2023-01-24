const express = require("express"); // memanggil library express js
const bodyParser = require("body-parser"); // memanggil library body-parser
const cors = require("cors"); // memanggil library cors
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/convert/celcius/:suhu", (req, res) => {
  let celcius = Number(req.params.suhu);

  let reamur = celcius * (4 / 5);
  let farenhait = celcius * (9 / 5) + 32;
  let kelvin = celcius + 273;

  let skala = {
    celcius,
    result: {
      reamur,
      kelvin,
      farenhait,
    },
  };

  res.json(skala);
});

app.get("/convert/reamur/:suhu", (req, res) => {
    let reamur = Number(req.params.suhu);
  
    let celcius = reamur * (5 / 4);
    let farenhait = reamur * (9 / 4) + 32;
    let kelvin = reamur * (5 / 4) + 273;
  

let skala = {
    reamur,
    result: {
      celcius,
      kelvin,
      farenhait,
    },
  };

  res.json(skala);
});

app.get("/convert/fahrenhait/:suhu", (req, res) => {
    let fahrenhait = Number(req.params.suhu);
    
    let celcius = fahrenhait - 32 * (5 / 9);
    let reamur = fahrenhait - 32 * (4 / 9);
    let kelvin = fahrenhait - 32 * (5 / 9) + 273;
  

let skala = {
    fahrenhait,
    result: {
      celcius,
      kelvin,
      reamur,
    },
  };

  res.json(skala);
});

app.get("/convert/kelvin/:suhu", (req, res) => {
    let kelvin = Number(req.params.suhu);
    
    let celcius = kelvin - 273;
    let reamur = kelvin - 273 * (4 / 5);
    let fahrenhait = kelvin - 273 * (9 / 5) + 32;
  

let skala = {
    kelvin,
    result: {
      celcius,
      fahrenhait,
      reamur,
    },
  };

  res.json(skala);
});

app.listen(8000, () => {
    console.log("Berhasil, server berjalan di port 8000");
  });
