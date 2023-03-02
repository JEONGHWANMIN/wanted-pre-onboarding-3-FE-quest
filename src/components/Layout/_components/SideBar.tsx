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
  background-color: red;
`;

const StyledLink = styled(Link)``;
