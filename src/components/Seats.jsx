import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";

const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 380px;
  padding: 0 20px;
`;

const SeatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 19px 8px;
  justify-content: center;
`;

const Line = styled.div`
  margin-top: 38px;
  margin-bottom: 24px;
  background-color: rgba(78, 90, 101, 1);
  height: 1px;
  width: 302px;
`;

const SeatButton = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-size: 11px;
  font-weight: 400;
  line-height: 12.89px;
  letter-spacing: 0.04em;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  border: ${(props) =>
    props.selected ? "2px solid rgba(238, 137, 127, 1)" : "none"};
  background-color: ${(props) =>
    props.available
      ? props.selected
        ? "rgba(250, 219, 197, 1)"
        : "rgba(157, 184, 153, 1)"
      : "rgba(43, 45, 54, 1)"};
  color: ${(props) => (props.available ? "#000" : "rgba(43, 45, 54, 1)")};
  user-select: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-family: "Sarala", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.09px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgba(212, 212, 212, 1);
  width: 100%;
  font-family: Roboto;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 18.75px;
  text-align: left;
  color: rgba(175, 175, 175, 1);

  &::placeholder {
    font-family: Roboto;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 18.75px;
    text-align: left;
    color: rgba(175, 175, 175, 1);
  }
`;

const ReserveButton = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: rgba(238, 137, 127, 1);
  color: rgba(43, 45, 54, 1);
  font-family: Sarala;
  font-size: 18px;
  font-weight: 700;
  line-height: 29.35px;
  letter-spacing: 0.04em;
  text-align: center;
  cursor: pointer;
  margin-top: 31px;
`;

const Seats = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [movie, setMovie] = useState({});
  const [showtime, setShowtime] = useState("");
  const [day, setDay] = useState({});

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`
        );
        setSeats(response.data.seats);
        setMovie(response.data.movie);
        setShowtime(response.data.name);
        setDay(response.data.day);
      } catch (error) {
        setError(error);
        console.error("Error fetching seats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();
  }, [id]);

  const handleSeatClick = (seatId, isAvailable) => {
    if (!isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }

    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((id) => id !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  const handleCpfChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 11);
    setCpf(value);
  };

  const handleReserveSeats = async (event) => {
    event.preventDefault();
    if (!name || !cpf) return;

    try {
      await axios.post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        {
          ids: selectedSeats,
          name,
          cpf,
        }
      );
      const selectedSeatNames = selectedSeats.map(
        (seatId) => seats.find((seat) => seat.id === seatId).name
      );
      navigate("/sucesso", {
        state: { name, cpf, selectedSeatNames, movie, showtime, day },
      });
    } catch (error) {
      console.error("Error reserving seats:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <SeatsContainer>
      <SeatsGrid>
        {seats.map((seat) => (
          <SeatButton
            key={seat.id}
            available={seat.isAvailable}
            selected={selectedSeats.includes(seat.id)}
            onClick={() => handleSeatClick(seat.id, seat.isAvailable)}
          >
            {seat.name}
          </SeatButton>
        ))}
      </SeatsGrid>
      <Line />
      <Form onSubmit={handleReserveSeats}>
        <Label htmlFor="name">Nome do comprador(a)</Label>
        <Input
          id="name"
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Label htmlFor="cpf">CPF do comprador(a)</Label>
        <Input
          id="cpf"
          type="text"
          placeholder="Digite seu CPF..."
          value={cpf}
          onChange={handleCpfChange}
          required
          pattern="\d{11}"
          title="O CPF deve conter 11 dígitos"
        />
        <ReserveButton
          type="submit"
          disabled={!name || cpf.length !== 11 || selectedSeats.length === 0}
        >
          Reservar assento(s)
        </ReserveButton>
      </Form>
    </SeatsContainer>
  );
};

export default Seats;
