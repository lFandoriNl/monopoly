import express from 'express';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.send('Api');
});

app.listen(8080, function () {
  console.log('App is listening on port 8080!');
});
