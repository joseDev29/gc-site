import styled from "styled-components";

export const Container = styled.header`
  background-color: #000000;
  font-size: 3vh;
  color: #ffffff;
  position: sticky;
  top: 0;
  width: 100%;
  height: max-content;
  padding: 0 1vw;

  @media (min-width: 768px) {
    font-size: 2.5vh;
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  && .util {
    width: 12%;
  }

  && .dropdown-button {
    height: 60%;
    width: 12%;
  }

  @media (min-width: 768px) {
    && .dropdown-button,
    .util {
      display: none;
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: ${(props) => (props.down ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  && li {
    height: 10vh;
    display: flex;
    align-items: center;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    && li {
      margin: 0 1vw;
    }
  }
`;

export const A = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  color: #ffffff;
  && .logo-icon {
    height: 70%;
  }
`;
