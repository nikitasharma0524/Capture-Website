import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #1b1b1b;
        font-family: 'Inter', sans-serif;
    }
    html{
        @media screen and (max-width: 1000px) {
    font-size: 10px;
}
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background-color: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;

        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
    h2{
            font-weight: lighter;
            font-size: 4rem;
    }
        h3{
            color: white;
        }
        p{
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1.4rem;
            line-height: 150%;
        }
        h4{
            font-weight: bold;
            font-size: 2rem;
        }
        span{
             font-weight: bold;
            color: #23d997;
        }
        a{
            font-size: 1.1rem;
        }
`;

export default GlobalStyles;
