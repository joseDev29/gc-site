import styled from "styled-components";

import { Footer } from "../Footer";
import { Header } from "../Header";

const Main = styled.main``;

export const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
