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

                &::-webkit-scrollbar {
                        width: .4rem;
                       
                 }

                &::-webkit-scrollbar-track {
                     background: unset; 
                     max-height: 1rem;
                     margin : 2rem 0;

                }
                
                &::-webkit-scrollbar-thumb {
                    background: ${(props) => props.theme.color.dimGrayColor};
                    border-radius: 2rem;
                   
                }

                &::-webkit-resizer {
                    height: 1rem;
                }
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
