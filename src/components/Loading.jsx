import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin-top: 20px;
`;

const Loading = () => {
  return <Loader />;
};

export default Loading;
