const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

app.use( express.static(__dirname + '/public'));

// HBS
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine','hbs');

const port = process.env.PORT || 3000;
 
// app.get('/', (req, res) => {
//     let salida = {
//         'nombre':'Edward Andres',
//         'edad':20,
//         url: req.url
//     };
//  res.send(salida)
// })



app.get('/',(req,res)=>{
  res.render('home',{
      nombre: 'Edward',
      anio: new Date().getFullYear()
  });  
})
app.get('/about',(req,res)=>{
  res.render('about',{
      nombre: 'Edward',
      anio: new Date().getFullYear()
  });  
})
 
app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})