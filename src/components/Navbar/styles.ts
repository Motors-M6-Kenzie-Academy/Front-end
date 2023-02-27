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
