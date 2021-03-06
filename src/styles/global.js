import styled, { createGlobalStyle } from "styled-components";

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
`

export const Heading1 = styled.h1`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 150px;
  
  text-transform: uppercase;
`

export const Heading2 = styled.h2 `
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 100px;

  text-transform: uppercase;
`

export const Heading3 = styled.h3 `
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 56px;

  text-transform: uppercase;
`

export const Heading4 = styled.h4 `
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 32px;

  text-transform: uppercase;
`

export const Heading5 = styled.h5 `
  font-weight: 400;
  font-size: 28px;

  letter-spacing: 4.75px;

  text-transform: uppercase;
`

export const Subheading1 = styled.h6 `
  font-weight: 400;
  font-size: 28px;
  text-transform: uppercase;
`

export const Subheading2 = styled.h6 `
  font-weight: 400;
  font-size: 14px;
  color: ${colors.primary};

  text-transform: uppercase;
  letter-spacing: 2.35px;
`
export const Bodytext = styled.p `
  font-weight: 400;
  font-size: 18px;

  line-height: 32px;

  max-width: 450px;
`
