import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import Loading from "./Loading";
import ContentContainer from "../styles/ContentContainer";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ContentContainer>
      {loading ? (
        <Loading />
      ) : (
        movies.map((movie) => (
          <Movie key={movie.id} id={movie.id} posterURL={movie.posterURL} />
        ))
      )}
    </ContentContainer>
  );
};

export default AllMovies;
