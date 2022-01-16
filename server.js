const http = require("http");

const port = 3000;

http.createServer((req, resp)=>
{

    console.log(req.connection.remoteAddress);
    console.log("hola he recibido una petición");
return resp.end("Hola Mundo");

}).listen(port,()=>{

    console.log('servidor corriendo en el puerto ${port}');
});
