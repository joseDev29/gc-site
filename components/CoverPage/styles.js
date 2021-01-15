import styled from "styled-components";

export const Div = styled.div`
  background-color: #000000;
  width: 100%;
  height: ${(props) => (props.customHeight ? props.customHeight : 90)}vh;
  ${(props) => (props.addStyles ? props.addStyles : ``)}
`;
