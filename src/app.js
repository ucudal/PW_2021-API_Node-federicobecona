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
      "descripcion":"Contribuí al desarrollo de los autos eléctricos más avanzados del mercado.",
      "fechaInicio": new Date("2015-07-04"),
      "fechaFin": new Date("2017-07-04")
    },
    {
      "empresa":"SpaceX",
      "puesto":"CEO",
      "descripcion":"Contribuí al desarrollo de cohetes espaciales.",
      "fechaInicio": new Date("2017-07-04"),
      "fechaFin": new Date("2019-07-04")
    },
    {
      "empresa":"SolarCity",
      "puesto":"CEO",
      "descripcion":"Diseñé paneles solares de última tecnología.",
      "fechaInicio": new Date("2019-04-23"),
      "fechaFin": new Date("2021-11-24")
    } 
  ]});
});


app.post('/enviar-formulario', jsonParser, (req, res) => {
  let nombre = req.body.nombreContacto;
  if(!nombre){
    res.status(400)
    res.send('Falta el nombre de contacto');
  }else{
    res.status(200)
    res.cookie(`PW_2021-CV_Contacto`, nombre, {
      secure: true,
      httpOnly: true,
    })
    res.send("Se ha enviado satisfactoriamente");
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