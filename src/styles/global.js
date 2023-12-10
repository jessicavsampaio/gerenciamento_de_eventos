import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html, body, #root {
        background-color: #776B5D;
        min-height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;
