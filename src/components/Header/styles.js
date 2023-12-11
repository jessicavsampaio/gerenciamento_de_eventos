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

    @media (max-width: 600px){
      padding: 5px;
    }

    > div > a > img {
        width:160px;
    }
    @media (max-width: 800px){
      > div > a > img {
        display: none;
      }
    }
`;

export const HeaderNav = styled.nav`
    display:flex;
    gap: 30px;

    > a {
        text-decoration: none;
        color: #413E48;
        font-size: 25px;
    }

    @media (max-width: 600px){
      > a {
        font-size: 19px;
        margin-top: 5px;
        margin-right: 15px;
      }
    }

    @media (max-width: 870px){
      > a {
        font-size: 20px;
        margin-top: 5px;
        margin-right: 15px;
      }
    }

    > a:hover {
        color: #ffffff;
    }

    svg{
        width: 30px;
        height: 30px;
    }
    @media (max-width: 600px) {
      .a[to="/categorias"],
      .a[to="/locais"] {
        display: none;
      }
    }
    @media (max-width: 600px) {
      .hide-link {
          display: none;
      }
  }
`;
