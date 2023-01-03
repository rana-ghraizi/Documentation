const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('ok');
  });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

app.get('/test', (req, res) => {
    res.send({ status: 200, message: 'ok'});
})  

app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    res.send({ status: 200, message: `${hours}:${minutes}`});
})  
