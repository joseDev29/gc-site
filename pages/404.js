import Head from "next/head";
import { css } from "styled-components";

import { CoverPage } from "../components/CoverPage";

const PageNotFound = () => {
  const coverStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;

    && img {
      height: 80%;
      max-width: 90%;
    }
  `;
  return (
    <>
      <Head>
        <title>GC / Not found page</title>
      </Head>
      <CoverPage addStyles={coverStyles}>
        <img src="/not-found-image.svg" alt="not found image" />
      </CoverPage>
    </>
  );
};

export default PageNotFound;
