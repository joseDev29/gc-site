import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    width: 100%;
    height: 100%;
}

body{
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    overflow: hidden;
}

#__next{
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow-y: scroll;
}

a{
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
}
`;
