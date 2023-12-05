import styled from "styled-components";

export const CardCriarEventoDiv = styled.div`
    background-color: #413E48;
    border-radius: 15px;
    margin: 0 480px 15px;
    padding: 40px;

    h3 {
        font-size: 24px;
        color: #ff9000;
        margin-bottom: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    form > div {
        display: flex;
        gap: 10px;
        color: #ffffff;
        font-size: 16px;
    }

    .formLabel {
        display: flex;
        align-items: center;
    }

    input,
    select,
    textarea {
        margin-bottom: 10px;
        border-radius: 15px;
        padding: 7px 14px;
    }

    svg {
        height: 24px;
        width: 24px;
    }

    a {
        color:#fff;
    
    }

    a:hover{
        color: #ff9000;
    }
       
    .cadastroEventoBtn {
        border-radius: 15px;
        padding: 7px;
        border: none;
        color: #ffffff;
        background-color: #ff9000;
        width: 120px;
        align-self: center;
        margin-top: 20px;
    }

    .cadastroEventoBtn:hover {
        opacity: 0.8;
        cursor: pointer;
    }

`;