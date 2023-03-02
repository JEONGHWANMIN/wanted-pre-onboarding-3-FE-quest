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
      <Main>
        <SideBar />
        <MainContent>{children}</MainContent>
      </Main>
      <Footer />
    </Container>
  );
}

export { HeaderSideBarLayout };

const Container = styled.div``;

const Main = styled.main`
  display: flex;
`;

const MainContent = styled.div``;
