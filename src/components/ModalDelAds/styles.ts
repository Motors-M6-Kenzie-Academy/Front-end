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
    height: 331px;
    background-color: #fff;
    border-radius: 0.5rem;
    gap: 2rem;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    margin: 30px;
  }