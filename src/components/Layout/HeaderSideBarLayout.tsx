import React, { ReactElement } from "react";
import styled from "styled-components";
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
      <div className="item">{children}</div>
      <div className="item">Footer</div>
    </Container>
  );
}

export { HeaderSideBarLayout };

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 100px 1fr 300px;

  div:nth-of-type(1) {
    grid-column-end: span 2;
  }

  div:nth-child(4) {
    grid-column-end: span 2;
  }
`;
