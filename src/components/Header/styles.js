import styled from "styled-components";

export const HeaderDiv = styled.div`
    height: 90px;
    background-color: #B0A695;
    display: flex;
    justify-content: space-between;
    padding: 0 85px;
    align-items: center;
    font-size: 20px;
    width: 100%;
    position: fixed;
    top: 0;

    > div > a > img {
        width:160px;
    }
`;

export const HeaderNav = styled.nav`
    display:flex;
    gap: 30px;

    > a {
        text-decoration: none;
        color: #413E48;
        font-size: 20px;
    }

    > a:hover {
        color: #ffffff;
    }

    svg{
        width: 30px;
        height: 30px;
    }
`;
