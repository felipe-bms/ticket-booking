import React from "react";
import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Title from "./components/Title";
import AllMovies from "./components/AllMovies";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import OrderInfo from "./components/OrderInfo";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%; /* Garantir que o container ocupe a largura total */
  overflow-x: hidden; /* Evitar o estouro horizontal */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Garantir que o wrapper ocupe a largura total */
  max-width: 800px;
`;

function App() {
  const location = useLocation();

  const getTitle = () => {
    switch (true) {
      case location.pathname === "/":
        return "Em Cartaz";
      case /^\/sessoes\/\d+$/.test(location.pathname):
        return "Selecione o horário";
      case /^\/assentos\/\d+$/.test(location.pathname):
        return "Selecione o(s) assento(s)";
      case location.pathname === "/sucesso":
        return "Pedido finalizado!";
      default:
        return "";
    }
  };

  return (
    <AppContainer>
      <Header />
      <Title>{getTitle()}</Title>
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<AllMovies />} />
          <Route path="/sessoes/:id" element={<Sessions />} />
          <Route path="/assentos/:id" element={<Seats />} />
          <Route path="/sucesso" element={<OrderInfo />} />
        </Routes>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
