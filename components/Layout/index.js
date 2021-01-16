import { Footer } from "../Footer";
import { Header } from "../Header";

import { Main } from "./styles";

export const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
