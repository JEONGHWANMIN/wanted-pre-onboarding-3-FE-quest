import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SideBar() {
  return (
    <Container>
      <StyledLink to="page1">page1</StyledLink>
      <StyledLink to="page2">page2</StyledLink>
      <StyledLink to="page3">page3</StyledLink>
    </Container>
  );
}

export { SideBar };

const Container = styled.div`
  width: 30rem;
  height: 100rem;
  border-right: solid 1px lightgray;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: black;

  &:hover {
    color: blue;
  }
`;
