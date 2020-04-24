const http = require('http');

http.createServer( (req,res)=>{
    res.writeHead(200,{ 'content-type':'application/json' });
    let salida = {
        'nombre':'Edward Andres',
        'edad':20,
        url: req.url
    };
    res.write( JSON.stringify(salida) );
    res.end();
} ).listen(8081);

console.log('Escuchando en el puerto 8081');