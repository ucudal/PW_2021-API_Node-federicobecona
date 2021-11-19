var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({
  extended: true
}));

var jsonParser = bodyParser.json();



app.get('/experiencia-laboral', function(req, res) {
  res.send({
    "experiencia-laboral":[
    {
      "empresa":"Tesla",
      "puesto":"CEO",
      "descripcion":"Hago autos eléctricos",
      "fechaInicio": new Date("2015-07-04"),
      "fechaFin": new Date("2015-07-04")
    },
    {
      "empresa":"SpaceX",
      "puesto":"CEO",
      "descripcion":"Hago cohetes espaciales",
      "fechaInicio": new Date("2015-07-04"),
      "fechaFin": new Date("2015-07-04")
    },
    {
      "empresa":"SolarCity",
      "puesto":"CEO",
      "descripcion":"Diseño paneles solares",
      "fechaInicio": new Date("2021-04-23"),
      "fechaFin": new Date("2015-07-04")
    } 
  ]});
});

app.post('/hacer-cookie', jsonParser, (req, res) => {
  let nombre = req.body.nombreContacto;
  if(!nombre){
    res.status(400).send('Falta el nombre de contacto');
  }else{
    res.status(200).cookie(`PW_2021-CV_Contacto`,JSON.stringify(
    {nombreContacto: nombre}), {
      secure: true,
      httpOnly: true,
    }).send("Se ha enviado satisfactoriamente");
  }
});



app.use(function(req,res){
    res.status(404);
    res.send('404 - No fue encontrado');
});
app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
module.exports = app;