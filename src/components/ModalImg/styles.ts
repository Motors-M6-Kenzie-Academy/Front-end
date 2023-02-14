import styled from "styled-components";

export const ContainerImg = styled.div`
  width: 100rem;
  height: 75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);

  .modalBox{
    width: 32.5rem;
    height: 22.125rem;
    background-color: #fff;
    border-radius: .5rem;
  }

  .headerModal{
    display: flex;
    width: 32.5rem;
    height: 3.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    gap: 18.875rem;
  }

  .divImg{
    width: 29.125rem;
    heigth: 14.9375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #E9ECEF;
    margin-left: 1.5625rem;
    padding: 1.6875rem .4375rem;
    gap: .625rem;
    border-radius: .25rem;
  }
  
  h2{
    width: 100%;
    color: #212529;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }

  img{
    width: 23.75rem;
    heigth: 7.8125rem;
    justify-content: center;
    align-items: center;
  }

  button{
    background-color: #fff;
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    max-width: 100%;
    min-height: 380px;
    img {
      max-width: 50%;
    }
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    max-width: 115%;
    min-height: 380px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    max-width: 57%;
    min-height: 400px;
  }
  @media screen and (min-width: 2560px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    max-width: 57%;
    min-height: 260px;
    max-height: 400px;
`