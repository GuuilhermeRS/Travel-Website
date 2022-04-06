import { createGlobalStyle } from "styled-components";

export const colors = {
  light: '#FFF',
  dark: '#0B0D17',
  primary: '#D0D6F9',
}

export const fonts = {
  serif: `'Bellefair', serif`,
  sansSerif: `'Barlow Condensed', sans-serif`,
}


export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${colors.primary};
    background-image: url(./background-home-desktop.jpg);
    background-size: cover;

    font-family: ${fonts.sansSerif};
    font-weight: 400;
    color: ${colors.light};
  }

  h1 {
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: 150px;
    
    text-transform: uppercase;
  }

  h2 {
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: 100px;


    text-transform: uppercase;
  }

  h3 {
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: 56px;

    text-transform: uppercase;
  }

  h4 {
    font-family: ${fonts.serif};
    font-weight: 400;
    font-size: 32px;

    text-transform: uppercase;
  }

  h5 {
    font-weight: 400;
    font-size: 28px;

    letter-spacing: 4.75px;

    text-transform: uppercase;
  }

  h6 {
    font-weight: 400;
    font-size: 28px;
  }

  p {
    font-weight: 400;
    font-size: 18px;

    max-width: 450px;
  }


`