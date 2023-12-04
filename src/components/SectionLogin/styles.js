import styled from "styled-components";

export const SectionLoginDiv = styled.div`
    background-color: #413E48;
    border-radius: 15px;
    margin: 0 500px;
    padding: 40px;

    h3 {
        font-size: 24px;
        color: #ff9000;
        margin-bottom: 10px;
    }

    .Section {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;
    }

    .nome {
        display: flex;
        gap: 10px;
        color: #ffffff;
        font-size: 16px;
    }

    .email {
        display: flex;
        gap: 10px;
        color: #ffffff;
        font-size: 16px;
    }
    .senha {
        display: flex;
        gap: 10px;
        color: #ffffff;
        font-size: 16px;
    }

    .cadastroBtn {
        display: flex;
        gap: 10px;
        color: black;
        font-size: 16px;
        padding: 5px;
        margin-top: 40px;
    }
`;