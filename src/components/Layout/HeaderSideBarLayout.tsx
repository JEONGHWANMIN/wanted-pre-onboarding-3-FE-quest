import React, { ReactElement } from "react";
import styled from "styled-components";
import Footer from "./_components/Footer";
import { Header } from "./_components/Header";
import { SideBar } from "./_components/SideBar";

interface Props {
  children: ReactElement;
}

function HeaderSideBarLayout({ children }: Props) {
  return (
    <Container>
      <Header />
      <SideBar />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  );
}

export { HeaderSideBarLayout };

const Container = styled.div`
  display: grid;

  grid-template-columns: 400px 1fr;
  grid-template-rows: 100px 1fr 300px;

  div:nth-of-type(1) {
    grid-column-end: span 2;
  }

  div:nth-child(4) {
    grid-column-end: span 2;
  }
`;

const MainContent = styled.div``;
