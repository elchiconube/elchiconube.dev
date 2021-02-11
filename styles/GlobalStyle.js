import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --body-background: #fff;
    --font-color: #38414b;

    --color-main: #38414b;
    --color-yellow: #fdbb07;
    --color-white: white;
    --color-bts: #283149;
    --color-clinpify: #242424;
    --color-utad: #404B69;
    --color-axel: #F73859;
    --color-book: #19191B;
    --color-news: #00818A;
    --color-contact: #23293;

    --font-base: 'Rooney', Arial, serif;
    --font-secondary: 'Montserrat-SemiBold', Verdana, sans-serif;
    --font-tertiary: 'BebasNeue', Verdana, sans-serif;

  }

  [data-theme="dark"] {
    --body-background: #38414b;
    --font-color: #fff;

  }


html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

*{
    box-sizing: border-box;
}

@font-face {
  font-family: 'Rooney';
  src: url('/fonts/Rooney-LightItalic.ttf');
}

@font-face {
  font-family: 'BebasNeue';
  src: url('/fonts/BebasNeue-Regular.woff2');
}

@font-face {
  font-family: 'Montserrat-SemiBold';
  src: url('/fonts/Montserrat-SemiBold.ttf');
}

body{
  background-color:var(--body-background);
  font-family: var(--font-base);
  color: var(--font-color);
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

h1,h2,h3,h4{
  font-family: var(--font-secondary);
}

ul{
  list-style: none;
}

p,li{
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
}

a{
  text-decoration: none;
  color: var(--color-yellow);
}

strong{
  color: var(--color-yellow);
  font-weight: normal;
}

`;

export default GlobalStyle;
