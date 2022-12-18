import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({ result: 'tudo ok por aqui' })
})

app.listen(4000, () => console.log('Servidor esta no ar 🔥'))