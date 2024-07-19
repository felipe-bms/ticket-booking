// src/components/Header.js

import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 67px;
  background-color: rgba(238, 137, 127, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  gap: 16px;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 10px;
`;

const TextBox = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 34px;
  font-weight: 600;
  line-height: 39.92px;
  text-align: center;
  color: rgba(250, 219, 197, 1);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={`/assets/cineflex_logo.png`} alt="Logo" />
      <TextBox>Cineflex</TextBox>
    </HeaderContainer>
  );
};

export default Header;
