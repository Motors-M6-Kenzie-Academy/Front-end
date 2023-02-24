import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;

  .modalBox {
    width: 520px;
    height: 1000px;
    background-color: #fff;
    border-radius: 0.5rem;
    gap: 2rem;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    margin: 30px;
  }

  .headerModal {
    display: flex;
    width: 32.5rem;
    height: 3.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    gap: 18.875rem;
  }

  .initModal {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
  }

  .btnType {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }

  .btnPublish {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
    gap: 1rem;
  }

  .btnSell {
    width: 228px;
    height: 48px;
    border-radius: 4px;
    background-color: #4529e6;
    padding: 12px;
    color: #fff;
    font-size: 14px;
  }

  .btnBid {
    width: 228px;
    height: 48px;
    border-radius: 4px;
    background-color: #fff;
    padding: 12px;
    color: #0b0d0d;
    font-size: 14px;
    border: 2px solid #dee2e6;
  }

  .titleAds {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
  }

  #title {
    width: 100%;
  }

  .btnCancel {
    width: 126px;
    height: 48px;
    border-radius: 4px;
    background-color: #fff;
    padding: 12px;
    color: #0b0d0d;
    font-size: 14px;
    border: 2px solid #dee2e6;
  }

  .btnCreate {
    width: 228px;
    height: 48px;
    border-radius: 4px;
    background-color: #4529e6;
    padding: 12px;
    color: #fff;
    font-size: 14px;
  }

  .listVehicleType {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }

  .btnVType {
    width: 228px;
    height: 48px;
    border-radius: 4px;
    background-color: #fff;
    padding: 12px;
    color: #0b0d0d;
    font-size: 14px;
    border: 2px solid #dee2e6;
  }

  .btnVType:hover {
    background-color: #4529e6;
    color: #fff;
  }

  .listInfoVehicle {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }

  .infoVehicle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
  }

  .vehicleType {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
  }

  .imgAds {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 50px;
    gap: 1rem;
  }

  #description {
    width: 100%;
    height: 80px;
  }

  h2 {
    width: 100%;
    color: #212529;
    font-size: 16px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    margin-top: 1.5rem;
  }

  label {
    margin-top: 1.5rem;
    font-size: 14px;
    color: #000;
    font-weight: 500;
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
  }
`;
