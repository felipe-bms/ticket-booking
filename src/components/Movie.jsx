// src/components/Movie.js

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MoviePoster = styled.img`
  width: 145px;
  height: 210px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

const Movie = ({ id, posterURL }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sessoes/${id}`);
  };

  return (
    <MoviePoster src={posterURL} alt="Movie Poster" onClick={handleClick} />
  );
};

export default Movie;
