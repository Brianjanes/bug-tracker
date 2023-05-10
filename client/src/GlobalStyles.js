import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --font-family: 'Roboto Mono', monospace;
    --padding-page: 24px;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font-family: 'Roboto Mono', monospace;
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }

  h1,
h2,
h3,
label{

}
button {
  width: 125px;
  height: 40px;
  color: white;
  background-color: #333333;
  border-radius: 5px;
  border: none;
  font-family: 'Roboto Mono', monospace;

}
button:hover{
cursor: pointer;
background-color: #595959;
}
p,
a,
li,
blockquote,
input {
 
}

  input {
 
  }
`;
