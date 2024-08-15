const express = require('express');
const app = express();   
const port = 3000;

app.use(express.json());
app.get('/', (request, response) => {
    response.send('Goblau');
})

app.get('/noticias', (request, response) => {
    const noticia = {
        id: 666,
        texto: "Elisiooooooooooo",
        autor: "Bruno Goblau"
    }
    response.send(noticia);
});

app.post('/soma', (request, response) => {
    const body = request.body;
    const numero1 = body.numero1;
    const numero2 = body.numero2;
    const resultado = {
        resultado: numero1 + numero2
    };
    response.send(resultado);
});

app.listen(port, () =>{
    console.log("Servidor iniciado na porta " + port)
});