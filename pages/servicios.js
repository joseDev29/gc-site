import Head from "next/head";

import { css } from "styled-components";
import { CoverPage } from "../components/CoverPage";
import { useScrollTop } from "../hooks/useScrollTop";

const Servicios = () => {
  const coverStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;

    && img {
      height: 20%;
      max-width: 90%;
    }
  `;

  useScrollTop();

  return (
    <>
      <Head>
        <title>GC / Servicios</title>
      </Head>
      <CoverPage addStyles={coverStyles}>
        <img src="/services-cover.svg" alt="services cover page" />
      </CoverPage>
    </>
  );
};

export default Servicios;
