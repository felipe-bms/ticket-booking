import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

function App() {
  return (
    <AppContainer>
      <Title>Welcome to Ticket Booking</Title>
      {/* Adicione mais conteúdo aqui */}
    </AppContainer>
  );
}

export default App;
