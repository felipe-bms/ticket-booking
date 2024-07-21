import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px;
  padding-bottom: 0;
  margin: 0 24px;
  width: calc(100% - 40px);
  background-color: rgba(43, 45, 54, 1);
  border-radius: 8px;
`;

const OrderContainer = styled.div`
  width: 100%;
`;

const Subtitle = styled.p`
  width: 100%;
  font-family: Sarala;
  font-size: 22px;
  font-weight: 700;
  line-height: 35.87px;
  letter-spacing: 0.04em;
  color: rgba(238, 137, 127, 1);
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(78, 90, 101, 1);
`;

const InfoContainer = styled.div`
  margin-bottom: 16px;
`;

const Info = styled.p`
  font-family: Sarala;
  font-size: 20px;
  font-weight: 400;
  line-height: 32.61px;
  letter-spacing: 0.04em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin: 5px 0;
`;

const HomeButton = styled.button`
  padding: 10px;
  width: calc(100% - 48px);
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
  margin-top: 20px;
`;

const formatCPF = (cpf) => {
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
};

const OrderInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, cpf, selectedSeatNames, movie, showtime, day } =
    location.state || {};

  return (
    <>
      <MainContainer>
        <OrderContainer>
          <Subtitle>Filme e Sessão</Subtitle>
          <InfoContainer>
            <Info>{movie.title}</Info>
            <Info>
              {day.date} {showtime}
            </Info>
          </InfoContainer>
          <Subtitle>Ingressos</Subtitle>
          <InfoContainer>
            {selectedSeatNames?.map((seatName, index) => (
              <Info key={index}>Assento {seatName}</Info>
            ))}
          </InfoContainer>
          <Subtitle>Comprador(a)</Subtitle>
          <InfoContainer>
            <Info>Nome: {name}</Info>
            <Info>CPF: {formatCPF(cpf)}</Info>
          </InfoContainer>
        </OrderContainer>
      </MainContainer>
      <HomeButton onClick={() => navigate("/")}>
        Voltar para tela inicial
      </HomeButton>
    </>
  );
};

export default OrderInfo;
