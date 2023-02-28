import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 7vh;

  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fdfdfd;
  border-bottom: 0.2rem solid #dee2e6;

  a,
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;

    color: var(--gray2);
  }

  .user-name {
    cursor: pointer;
  }
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
  /* Desabilita para tamanhos Mobile */
  @media (width < 820px) {
    display: none;
  }
  height: 100%;

  nav {
    height: 100%;

    display: flex;
    align-items: center;
    gap: 2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      gap: 1rem;
      padding-left: 2rem;
      border-left: 0.1rem solid var(--gray6);

      .user-sigla {
        padding: 0.5rem;
        background-color: var(--brand1);
        border-radius: 50%;
        color: var(--gray10);
      }

      a:last-child {
        border: 0.1rem solid var(--gray5);
        border-radius: 0.3rem;
        padding: 0.5rem 0.8rem;
      }
    }

    #user-settings-desktop {
      height: 20%;

      position: absolute;
      top: 3.5rem;
      right: 0.5rem;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      padding: 1.5rem;
      background-color: var(--gray10);

      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
      border-radius: 4px;

      z-index: 1;
    }
  }
`;

// Estilização para tamanhos Mobile

export const ContainerMobile = styled.div`
  /* Desabilita para tamanhos Desktops */
  @media (width > 820px) {
    display: none;
  }

  nav {
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    width: 100vw;
    transition: 0.2s;
    overflow: hidden;
    background-color: var(--gray10);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    z-index: 1;

    a {
      padding: 1rem;
    }

    div {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      padding-top: 1rem;
      border-top: 1px solid var(--gray3);

      a:last-child {
        text-align: center;
        padding: 0.5rem 0.8rem;
        border: 0.1rem solid var(--gray5);
        border-radius: 0.3rem;
        margin: 0 2rem 2rem 2rem;
      }
    }
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

  .modal {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    width: 30rem;
    max-width: 90%;

    padding: 2rem;

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    background-color: var(--gray10);
    border-radius: 1rem;

    h3 {
      font-family: var(--lexend);
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 2rem;
    }
    p {
      font-family: var(--inter);
      font-style: normal;
      font-weight: 500;
      font-size: 0.8rem;
      line-height: 2rem;
    }

    div {
      width: auto;
      input {
        width: auto;
      }
    }

    div:last-child {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      button {
        width: 30%;
      }

      button:last-child {
        width: 60%;
      }
    }

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
