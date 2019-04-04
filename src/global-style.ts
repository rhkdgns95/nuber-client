import reset from "styled-reset";
import {createGlobalStyle} from "./typed-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
    ${reset}
    * {
        box-sizing: border-box
    } 
    a{ 
        text-decoration: none
        color: inherit
    }
    body {
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
        // font-family: 'Maven Pro', sans-serif
        color:red
    }
    input,
    button {
        $: focus,
        $: active {outline: none}
    }
`;

export default GlobalStyle;