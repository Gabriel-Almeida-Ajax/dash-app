import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: lighter;
    }

    html, body, #root {
        height: 100%;
        background-color: #e5e5e5;
    }

`