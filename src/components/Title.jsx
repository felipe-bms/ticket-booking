import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
  width: 375px;
  height: 78px;
  position: relative;
  top: 20px;
  margin: 0 auto;
  margin-top: 68px;
  gap: 0px;
  opacity: 1;

  font-family: "Sarala", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 39.13px;
  letter-spacing: 0.04em;
  text-align: center;
  color: ${({ isFinalized }) =>
    isFinalized ? "rgba(157, 184, 153, 1)" : "rgba(255, 255, 255, 1)"};
`;

const Title = ({ children }) => {
  const isFinalized = children === "Pedido finalizado!";
  return <TitleContainer isFinalized={isFinalized}>{children}</TitleContainer>;
};

export default Title;
