const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/kubus", (req, res) => {
    let sisi = Number(req.body.sisi)
    let volume = sisi ** 3
    let luasPermukaan = 6 * (sisi ** 2)

    let response = {
        sisi: sisi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    res.json(response)
})

app.post("/balok", (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let volume = panjang * lebar * tinggi
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    res.json(response)
})


app.post("/tabung", (req, res) => {
    let jariJari = Number(req.body.jariJari)
    let tinggi = Number(req.body.tinggi)
    let volume = Math.PI * jariJari ** 2 * tinggi
    let luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi)

    let response = {
        jariJari: jariJari,
        tinggi: tinggi,
        volume: volume.toFixed(2),
        luasPermukaan: luasPermukaan.toFixed(2)
    }

    res.json(response)
})


app.post("/bola", (req, res) => {
    let jariJari = Number(req.body.jariJari)
    let volume = (4/3) * Math.PI * jariJari ** 3
    let luasPermukaan = 4 * Math.PI * jariJari ** 2

    let response = {
        jariJari: jariJari,
        volume: volume.toFixed(2),
        luasPermukaan: luasPermukaan.toFixed(2)
    }

    res.json(response)
})

//no 2

// Convert Celsius
app.get("/convert/celcius/:suhu", (req, res) => {
    let celcius = Number(req.params.suhu)
    let reamur = (4 / 5) * celcius
    let fahrenheit = (9 / 5) * celcius + 32
    let kelvin = celcius + 273

    res.json({
        celcius: celcius.toString(),
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    })
})

// Convert Reamur
app.get("/convert/reamur/:suhu", (req, res) => {
    let reamur = Number(req.params.suhu)
    let celcius = (5 / 4) * reamur
    let fahrenheit = (9 / 4) * reamur + 32
    let kelvin = celcius + 273

    res.json({
        reamur: reamur.toString(),
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    })
})

// Convert Fahrenheit
app.get("/convert/fahrenheit/:suhu", (req, res) => {
    let fahrenheit = Number(req.params.suhu)
    let celcius = (5 / 9) * (fahrenheit - 32)
    let reamur = (4 / 9) * (fahrenheit - 32)
    let kelvin = celcius + 273

    res.json({
        fahrenheit: fahrenheit.toString(),
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    })
})

// Convert Kelvin
app.get("/convert/kelvin/:suhu", (req, res) => {
    let kelvin = Number(req.params.suhu)
    let celcius = kelvin - 273
    let fahrenheit = (9 / 5) * celcius + 32
    let reamur = (4 / 5) * celcius

    res.json({
        kelvin: kelvin.toString(),
        result: {
            celcius: celcius,
            fahrenheit: parseFloat(fahrenheit.toFixed(2)),
            reamur: parseFloat(reamur.toFixed(2))
        }
    })
})
//no 3
app.post("/desimal", (req,res) =>{
    let desimal = Number(req.body.desimal)
    
    let response = {
        bilangan : "desimal",
        desimal : desimal,
        biner : desimal.toString(2),
        oktal : desimal.toString(8),
        heksadesimal : desimal.toString(16).toUpperCase()
    }
    res.json(response)
    })

app.post("/biner", (req,res) =>{
    let biner = Number(req.body.biner)
    let desimal = Number(biner, 2)

    let response = {
        bilangan : "biner",
        desimal : desimal,
        biner : desimal.toString(2),
        oktal : desimal.toString(8),
        heksadesimal : desimal.toString(16).toUpperCase()
    }
    res.json(response)
})

app.post("/oktal", (req,res) => {
    let oktal = Number(req.body.oktal)
    let desimal = Number (oktal, 8)

    let response = {
        bilangan : "oktal",
        desimal : desimal,
        biner : desimal.toString(2),
        oktal : desimal.toString(8),
        heksadesimal : desimal.toString(16).toUpperCase()
    }
    res.json(response)
})

app.post("/heksadesimal", (req,res) => {
    let heksadesimal = Number(req.body.heksadesimal)
    let desimal = Number (heksadesimal, 16)

    let response = {
        bilangan : "heksadesimal",
        desimal : desimal,
        biner : desimal.toString(2),
        oktal : desimal.toString(8),
        heksadesimal : desimal.toString(16).toUpperCase()
    }
    res.json(response)
})

// no 4

app.post('/bmi', (req, res) => {
  let tinggi = parseFloat(req.body.tinggi);
  let berat = parseFloat(req.body.berat);
  let bmi = berat / (tinggi * tinggi);
  let status = '';

  if (bmi < 18.5) status = "Kekurangan berat badan";
  else if (bmi < 25) status = "Normal (ideal)";
  else if (bmi < 30) status = "Kelebihan berat badan";
  else status = "Kegemukan (Obesitas)";

  res.json({
    tinggi,
    berat,
    bmi: parseFloat(bmi.toFixed(1)),
    status
  });
});

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
