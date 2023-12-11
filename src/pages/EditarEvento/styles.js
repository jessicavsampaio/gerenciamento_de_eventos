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

  .formLabel{
    color: white;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 6px:
  }

  .formLabel2{
    padding: 5px;
  }

  .verticalizar{
    display: flex;
    padding: 5px 0 0;
    flex-direction: column;
  }

  .rPill{
    border-radius: 25px;
    padding: 5px;
    width: 100%;
  }

  .rCentral{
    display: flex;
    justify-content: center;
  }

  .CardEventInfo {
    display: flex;
    gap: 10px;
    color: #ffffff;
    font-size: 16px;
  }

  .CardEventInfo svg {
    height: 24px;
    width: 24px;
  }

  .cadastroEventoBtn{
    border-radius: 15px;
    margin-top: 15px;
    padding: 7px;
    border: none;
    background-color: #ff9000;
    color: white;
    width: 80px;
  }

  .nomeEdit1{
    border-radios: 25px;
  }
`;
