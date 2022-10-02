import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import bgimage from '../assets/bg-texture.png'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
    *{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    html {
    scroll-behavior: smooth; 
    }
    img {
        display: block;
        width: 100%;
        object-fit: cover;
    }
    a:hover {
        color: ${theme.colors.white};
    }

    h1,
    h2,
    h3,
    h4,
     h5 {
        font-weight: 500;
    }

    h1 {
        font-size: 2.5rem;
    }

    a {
        color: ${theme.colors.white};
        opacity: 0.6;
        transition: all 400ms ease;
    }

    a:hover {
        color: ${theme.colors.white};
    }

    section {
        margin-top: 8rem;
    }
    section > h2, 
    section > h5 {
        text-align: center;
        color: ${theme.colors.white};
        opacity: 0.6;
    }

    section > h2 {
        color: ${theme.colors.colorprimary};
        margin-bottom: 3rem;  
    }

    ::-webkit-scrollbar {
      display: none;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: ${theme.background.colorbg};    
        color: ${theme.colors.white};
        line-height: 1.7;
        background-image: url(${bgimage}); 
    }

    @media screen and ( max-width:1024px) {
        section {
        margin-top: 6rem;
        }
    }

    @media screen and ( max-width:600px) {

        section > h2 {
            margin-bottom: 2rem;
        }
    }
}
`
