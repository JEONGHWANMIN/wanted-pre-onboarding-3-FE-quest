import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Logo>PreOnBoarding</Logo>
      <Nav>
        <StyledLink to="signin">SignIn</StyledLink>
        <StyledLink to="signup">SignUp</StyledLink>
      </Nav>
    </Container>
  );
}

export { Header };

const Container = styled.div`
  border: solid 1px lightgray;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-left: 2rem;
`;

const Nav = styled.nav`
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  padding-right: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #6b6b0b;
  }
`;
