import styled from "styled-components";

export const SectionCadastroDiv = styled.div`
    background-color: #413E48;
    border-radius: 15px;
    margin-bottom: 15px;
    width: 700px;
    padding: 40px;

    @media (max-width: 768px) {
      width: 550px;
    }

    @media (max-width: 600px) {
      width: 360px;
    }

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

    .formLabel {
        display: flex;
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

    a {
        color:#fff;
        align-self:center;
    }

    a:hover{
        color: #ff9000;
    }

    .cadastroBtn {
        border-radius: 15px;
        padding: 7px;
        border: none;
        color: #ffffff;
        background-color: #ff9000;
        width: 140px;
        align-self: center;
        margin-top: 20px;
    }

    .cadastroBtn:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;
