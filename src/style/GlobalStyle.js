import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;

        

        body {

            font-family: 'Poppins', sans-serif;
            background: ${(props) => props.theme.color.background};

            * {
                margin: 0;
                padding : 0;
                box-sizing: border-box;
            }

            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 1.7rem;
            }

            p {
                font-size: 1.6rem;
            }
        }
    }

`;

export default GlobalStyle;
