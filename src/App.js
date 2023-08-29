import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDetail from './MovieDetail';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description 1',
      posterURL: 'poster-url-1',
      rating: 7.5,
      trailerLink: 'embed-video-link-1',
    },
    // Add more movies with descriptions and trailer links
  ]);
  

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseFloat(ratingFilter)
    );
  });

  return (
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Switch>
          <Route exact path="/">
            <Filter
              titleFilter={titleFilter}
              ratingFilter={ratingFilter}
              setTitleFilter={setTitleFilter}
              setRatingFilter={setRatingFilter}
            />
            <MovieList movies={filteredMovies} />
          </Route>
          <Route path="/movies/:title">
            <MovieDetail movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
