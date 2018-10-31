express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.get("/",(req, res)=>{
res.send("Eventos de mi ciudad");
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
console.log(`Myciudapp ${app.settings.env}`);
