import Head from "next/head";

import { css } from "styled-components";
import { CoverPage } from "../components/CoverPage";

const Home = () => {
  const coverStyles = css`
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bolder;

    && img {
      height: 55%;
      max-width: 90%;
    }

    && .bienvenido {
      margin-top: 2.5%;
      font-size: 8vw;
    }

    @media (min-width: 768px) {
      && .bienvenido {
        font-size: 10vh;
      }
    }
  `;
  return (
    <>
      <Head>
        <title>GC Comunicaciones</title>
      </Head>
      <CoverPage addStyles={coverStyles}>
        <img src="/gc-logo-cover.svg" alt="gc-logo" />
        <h1 className="bienvenido">¡Bienvenido!</h1>
      </CoverPage>
    </>
  );
};

export default Home;
