import styled from "styled-components";

export const EditarEventoDiv = styled.div`
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

  buttom{
    border-radius: 15px;
    padding: 7px;
    border: none;
    color: #ffffff;
  }
`;
