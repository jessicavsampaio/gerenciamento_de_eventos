import styled from "styled-components";

export const HeaderDiv = styled.div`
    grid-area: header;
    height: 90px;
    background-color: #B0A695;
    display: flex;
    justify-content: space-between;
    padding: 0 85px;
    align-items: center;
    font-size: 20px;
    
    > div > a {
        font-family: 'Roboto Slab', serif;
        text-decoration: none;
        color: #413E48;
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
`;