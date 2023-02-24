import styled from "styled-components";

export const ContainerDel = styled.div`
  width: 1600px;
  height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);

  .modalBox{
    width: 520px;
    height: 354px;
    background-color: #fff;
    border-radius: 8px;
  }

  .headerModal{
    display: flex;
    width: 520px;
    height: 56px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    gap: 302px;
  }

  .divText{
    display: flex;
    width: 520px;
    height: 56px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    gap: 2rem;
  }

  .btnExclude{
    width: 12.5rem;
    height: 48px;
    background-color: #FDD8D8;
    color: #CD2B31;
    font-weight: 600;
  }

  h2{
    font-size: 1rem
    font-weight: 500;
  }

  p{
    font-size: 1rem
    font-weight: 400; 
    color: #495057;
  }

  button{
    width: 100px;
    height: 48px;
    background-color: #DEE2E6;
    color: #495057;
    font-weight: 600;
  }
  `