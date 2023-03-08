import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 7vh;
  min-height: 4.375rem;

  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fdfdfd;
  border-bottom: 0.2rem solid #dee2e6;
`;

export const MenuHamburger = styled.div`
  display: block;
  cursor: pointer;

  .line {
    width: 1.5rem;
    height: 0.2rem;
    background-color: black;
    margin: 0.3rem 0;
  }

  @media (width > 820px) {
    display: none;
  }
`;

export const Logo = styled.img``;

// Estilização para tamanhos Desktops

export const ContainerDesktop = styled.div`
  height: 100%;
  width: auto;

  @media (width < 820px) {
    display: none;
  }
`;

// Estilização para tamanhos Mobile

export const ContainerMobile = styled.div`
  height: 100%;
  width: 100%;

  button {
    background: transparent;
    font-family: var(--inter);
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--gray2);
    padding: 1rem;
  }

  @media (width > 820px) {
    display: none;
  }
`;

// Estilização para Modal Edit User

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.6);

  .container-flex {
    width: auto;
    display: flex;
    align-items: center;

    div {
      margin-right: 1rem;
      gap: 0;
    }
  }

  @media (width < 414px) {
    width: 20rem;
    padding: 0.8rem;

    position: fixed;
    left: 12%;
    top: 8%;
    z-index: 10;

    transform: translate(-5%, -5%);

    .container-flex {
      display: inline-block;
    }

    div {
      /* width: 12rem; */

      label {
        font-size: 0.8rem;
      }
      input {
        height: 1rem;
      }

      button {
        font-size: 0.8rem;
      }
    }
  }
`;

type ButtonProps = {
  bgColor: string;
  txColor: string;
  border?: boolean;
};

export const Button = styled.button<ButtonProps>`
  height: 2.8rem;
  width: 21rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--inter);
  font-style: normal;
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.txColor};
  background-color: ${(props) => props.bgColor};

  padding: 0.5rem 0.8rem;

  border: ${(props) => props.border && `0.1rem solid var(--gray5)`};
  border-radius: 0.4rem;

  @media only screen and (max-width: 414px) {
    width: 14rem;
  }
`;
