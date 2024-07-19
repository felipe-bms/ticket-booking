import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: none;
  background-color: rgba(43, 45, 54, 1);
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 100%;
  max-width: 400px;
`;

const DateInfo = styled.h3`
  margin: 0;
  padding: 0;

  border-bottom: 1px solid rgba(78, 90, 101, 1);
  font-family: Sarala;
  font-size: 20px;
  font-weight: 400;
  line-height: 32.61px;
  letter-spacing: 0.04em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  padding-bottom: 19px;
`;

const Showtimes = styled.div`
  padding-top: 19px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px 25px;
  margin-top: 10px;
`;

const ShowtimeButton = styled.button`
  font-family: Sarala;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.09px;
  letter-spacing: 0.04em;
  text-align: center;
  color: rgba(238, 137, 127, 1);

  border-radius: 4px;
  background-color: transparent;
  padding: 8px 16px;
  cursor: pointer;
  border: 2px solid rgba(238, 137, 127, 1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const ShowtimeCard = ({ day }) => {
  return (
    <Card>
      <DateInfo>
        {day.weekday} - {day.date}
      </DateInfo>
      <Showtimes>
        {day.showtimes.map((showtime) => (
          <ShowtimeButton key={showtime.id}>{showtime.name}</ShowtimeButton>
        ))}
      </Showtimes>
    </Card>
  );
};

export default ShowtimeCard;
