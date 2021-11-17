var express = require('express');

var app = express();
app.use(express.json()) 

app.get('/experiencia-laboral', function(req, res) {
  let expLab = [
    {
      "empresa":"...",
      "puesto":"...",
      "descripcion":"...",
      "fechaInicio": new Date("2021-04-23"),
      "puesto": new Date("2015-07-04")
    },
    {
      "empresa":"...",
      "puesto":"...",
      "descripcion":"...",
      "fechaInicio": new Date("2021-04-23"),
      "puesto": new Date("2015-07-04")
    },
    {
      "empresa":"...",
      "puesto":"...",
      "descripcion":"...",
      "fechaInicio": new Date("2021-04-23"),
      "puesto": new Date("2015-07-04")
    }
  ]
  res.send(expLab)
});

app.post('/hacer-cookie', (req, res) => {
  if(req.body.nombreContacto != null){
    res.cookie(`PW_2021-CV_Contacto`,JSON.stringify(
    {nombreContacto: req.body.nombreContacto}), {
      secure: true,
      httpOnly: true,
    });
    res.status(200);
    res.send("Se ha creado satisfactoriamente");
  }else{
    res.status(400);
    res.send('Falta el nombre de contacto');
  }
});

app.use(function(req,res){
    res.status(404);
    res.send('404 no fue encontrado');
});

app.listen(process.env.PORT || 4000, (a) => {
  console.log("Servidor disponible en http://localhost:4000")
});
 
module.exports = app;