import styled from "styled-components";

export const ContainerDel = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);

  .modalBox{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30rem;
    max-width: 90%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: var(--gray10);
    border-radius: 1rem;
    font-family: 'Lexend'
  }

  .headerModal{
    display: flex;
    width: 100%;
    height: 56px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 16px 24px;
    gap: 302px;
  }

  .btnClose{
    background-color: transparent;
    color:#ADB5BD;
    font-size: 16px
  }

  .divText{
    width: 520px;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    gap: 3rem;
    margin-top: 30px;
  }

  .divButton{
    margin: 80px 0 10px 150px;
    display: flex;
    gap: 1rem;
    align-items: right;
  }

  .btnExclude{
    width: 12.5rem;
    height: 48px;
    background-color: #FDD8D8;
    color: #CD2B31;
    font-weight: 600;
    font-size: 14px
    border-radius: 4px
  }

  h2{
    font-size: 16px;
    font-weight: 500;
  }

  p{
    margin: 20px 20px 0 0;
    font-size: 14px;
    font-weight: 400; 
    color: #495057;
  }

  button{
    width: 100px;
    height: 48px;
    background-color: #DEE2E6;
    color: #495057;
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px
  }
  `