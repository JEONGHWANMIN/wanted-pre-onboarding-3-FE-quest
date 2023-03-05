import React, { ReactElement } from "react";
import styled from "styled-components";
import { Header } from "./_components/Header";

interface Props {
  children: ReactElement;
}

function HeaderLayout({ children }: Props) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default HeaderLayout;

const Container = styled.div``;
