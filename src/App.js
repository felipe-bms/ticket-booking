import React from "react";
import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Title from "./components/Title";
import AllMovies from "./components/AllMovies";
import Sessions from "./components/Sessions";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Em Cartaz";
      case location.pathname.match(/^\/sessoes\/\d+$/) && location.pathname:
        return "Selecione o horário";
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
        </Routes>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
