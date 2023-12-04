import styled from "styled-components";

export const CardCriarLocaisDiv = styled.div`
    background-color: #413E48;
    border-radius: 15px;
    margin: 0 480px 15px;
    padding: 40px;

    h3 {
        font-size: 24px;
        color: #ff9000;
        margin-bottom: 10px;
    }

    .Section {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .local {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #ffffff;
        font-size: 16px;
    }

    svg {
        width: 24px;
        height: 24px;
    }

    input {
        margin-bottom: 10px;
        border-radius: 15px;
        padding: 7px 14px;
    }

    .cadastroLocalBtn {
        border-radius: 15px;
        padding: 7px;
        border: none;
        color: #ffffff;
        background-color: #ff9000;
        width: 140px;
        align-self: center;
        margin-top: 20px;
    }

    .cadastroLocalBtn:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;