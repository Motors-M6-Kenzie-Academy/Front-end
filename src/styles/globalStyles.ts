import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
	--white: #ffff;

    --black: #000;

    --gray0: #0B0D0D;
    --gray1: #212529;
    --gray2:  #495057;
    --gray3: #868E96;
    --gray4:  #ADB5BD;
    --gray5:  #CED4DA;
    --gray6:  #DEE2E6;
    --gray7:  #E9ECEF;
    --gray8:  #F1F3F5;
    --gray9:  #F8F9FA;
    --gray10:  #FDFDFD;

    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;

    --success1: #18794E;
    --success2: #CCEBD7;
    --success3: #DDF3E4;

    --brand1: #4529E6;
    --brand2: #5126EA;
    --brand3: #B0A6F0;
    --brand4: #EDEAFD;

    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #2A7D5F;
    --random10: #6100FF;
    --random11: #5700E3;
    --random12: #30007D;

    --transparent: none;
    
    --lexend: "Lexend", sans-serif;
    --inter: "Inter", sans-serif;
}

* {
    box-sizing: border-box;
    font-size: 62.5%;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
    -webkit-font-smoothing: antialiased;

    overflow-y: auto;
    overflow-x: hidden;

    width: 100vw;
    height: 100vh;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
    cursor: pointer;
    border: 0;
}

input {
    border: 0;
}

a {
    text-decoration: none;
    color: black;
}
`;

export default GlobalStyle;
