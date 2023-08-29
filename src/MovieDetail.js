import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(movie => movie.title === title);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        title={movie.title}
        width="560"
        height="315"
        src={movie.trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
