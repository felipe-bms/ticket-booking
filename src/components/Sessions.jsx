import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import ContentContainer from "../styles/ContentContainer";
import ShowtimeCard from "./ShowtimeCard";

const Sessions = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`
        );
        setMovieData(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching sessions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <ContentContainer>
        {movieData.days.length > 0 ? (
          movieData.days.map((day) => <ShowtimeCard key={day.id} day={day} />)
        ) : (
          <p>No sessions available</p>
        )}
      </ContentContainer>
    </div>
  );
};

export default Sessions;
