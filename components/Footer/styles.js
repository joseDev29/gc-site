import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: #1f1f1f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 2.5vh;
  font-weight: 100;
  && div {
    padding: 2vh 2vw;
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 2.5vh;
    && div {
      width: 50%;
    }
  }
`;
