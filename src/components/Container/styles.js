import styled from "styled-components";

export const ContainerDiv = styled.div`
    color: #ffffff;
    margin: 120px 480px 20px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }

    > a {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: #ffffff;
    }

    > a:hover {
        color: #ff9000;
    }
`;
