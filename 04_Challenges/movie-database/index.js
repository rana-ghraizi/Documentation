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
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
app.post('/movies/create', (req, res) => { 
    const { title, year, rating } = req.query
    const newMovie = { title, year, rating }
    if (title == "" || year == "" || year.toString().length != 4 || isNaN( year)){
        res.send({ status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
    } else if (rating == ""){
        const movie = { title: req.query.title, year: req.query.year, rating: 4 };
        movies.push( movie)
        res.send({ status: 200, data: movies})
    } else {
        movies.push(newMovie)
        res.send({ status: 200, data: movies})
    }
});
app.get('/movies/read', (req, res) => {
    res.send({ status: 200, data: movies});
})
app.put('/movies/update/:id', (req, res) => { 
    let id = req.params.id;
    let newTitle = req.query.title;
    movies[id - 1] = {title: newTitle, year: movies[req.params.id - 1].year, rating: movies[req.params.id - 1].rating};
    res.send(movies);
});
app.put('/movies/update/:id', (req, res) => { 
    let id = req.params.id;
    let newTitle = req.query.title;
    let newRating = req.query.rating;
    movies[id - 1] = {title: newTitle, year: movies[req.params.id - 1].year, rating: newRating};
    res.send(movies);
});
app.delete('/movies/delete/:id', (req, res) => {
    if (req.params.id <= 0 || req.params.id > movies.length){
        res.send({ status:404, error:true, message:"the movie " + req.params.id + " does not exist"});
    } else {
        movies.splice(req.params.id - 1, 1);
        res.send({ status:200, data: movies});
    }
})
app.get('/movies/read/by-date', (req, res) => {
    const sortedMovies = movies.sort((a, b) => a.year - b.year);
    res.send({ status: 200, data: sortedMovies});
})
app.get('/movies/read/by-rating', (req, res) => {
    const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
    res.send({ status: 200, data: sortedMovies});
})
app.get('/movies/read/by-title', (req, res) => {
    const sortedMovies = movies.sort((a, b) => {
        if (a.title < b.title) {return -1;}
        if (a.title > b.title) {return 1;}
        return 0;
    });
    res.send({ status: 200, data: sortedMovies});
})
app.get('/movies/read/id/:id', (req, res) => {
    if (req.params.id <= 0 || req.params.id > movies.length){
        res.send({ status:404, error:true, message:'the movie " + req.params.id + " does not exist'});
    } else {
        res.send({ status:200, data: movies[req.params.id - 1]});
    }
})
