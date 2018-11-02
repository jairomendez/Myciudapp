//importamos
express = require("express");
mongoose = require("mongoose");
//instanciamos
const app = express();
const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose.connect(
    "mongodb://localhost:27017/colegio",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos


app.get("/",(req, res)=>{
res.send("my ciudapp");
});

app.get("/usuarios", (req, res)=>{
res.contentType("aplication/json");
res.sendFile(__dirname+"/usuarios.json");
});

app.get("/eventos", (req, res)=>{
res.contentType("aplication/json");
res.sendFile(__dirname+"/eventos.json");
});

app.get("/atracciones", (req, res)=>{
res.contentType("aplication/json");
res.sendFile(__dirname+"/atracciones.json");
});

app.get("/talentos", (req, res)=>{
res.contentType("aplication/json");
res.sendFile(__dirname+"/talentos.json");
});

app.get("/publicaciones", (req, res)=>{
res.contentType("aplication/json");
res.sendFile(__dirname+"/publicaciones.json");
});

app.get("/comentarios", (req, res)=>{
res.contentType("aplication/json");
res.sendFile(__dirname+"/comentarios.json");
});
//
app.post("/usuarios", (req, res)=>{
res.send(`Recibido ${JSON.stringify(req.body)}`);
});

app.post("/eventos", (req, res)=>{
res.send(`Recibido ${JSON.stringify(req.body)}`);
});

app.post("/atracciones", (req, res)=>{
res.send(`Recibido ${JSON.stringify(req.body)}`);
});

app.post("/talentos", (req, res)=>{
res.send(`Recibido ${JSON.stringify(req.body)}`);
});

app.post("/publicaciones", (req, res)=>{
res.send(`Recibido ${JSON.stringify(req.body)}`);
});
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
