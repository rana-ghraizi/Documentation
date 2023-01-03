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
app.get('/hello', (req, res) => {
    res.send({ status: 200, message: 'Hello' });
});
app.get('/hello/:id', (req, res) => {
    const id = req.params.id;
    res.send({ status: 200, message: `Hello, ${id}` });
});
app.get('/search', (req, res) => {
    const search = req.query.s;
    if (search) {
        res.send({ status: 200, message: 'ok', data: search });
    } else {
        res.send({ status: 500, error: true, message: 'you have to provide a search' });
    }
})
