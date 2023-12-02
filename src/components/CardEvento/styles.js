import styled from "styled-components";

export const CardEventDiv = styled.div`
    background-color: #413E48;
    border-radius: 15px;
    margin: 0 480px;
    padding: 40px;

    h3 {
        font-size: 24px;
        color: #ff9000;
        margin-bottom: 10px;
    }

    > div {
        display: flex;
        justify-content: space-between;
    }

    > div > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .CardEventInfo {
        display: flex;
        gap: 10px;
        color: #ffffff;
        font-size: 16px;
    }

    .CardEventBtn {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .CardEventBtn button {
        border-radius: 15px;
        padding: 7px;
        border: none;
        color: #ffffff;
    }

    .CardEventBtn button:hover {
        opacity: 0.5;
        cursor: pointer;
    }

    .CardEventBtn button:first-child {
        background-color: #a3a0a0;
    }

    .CardEventBtn button:last-child {
        background-color: #ff9000;
    }

    .CardEventDescription {
        color: #ffffff;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 30px;
    }

    .CardEventDescription p:first-child {
        
    }
`;