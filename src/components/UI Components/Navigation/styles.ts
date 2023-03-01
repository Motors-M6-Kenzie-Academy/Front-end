import styled from "styled-components";

export const NavigationContainer = styled.nav`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    font-family: var(--inter);
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;

    color: var(--gray2);
  }

  .user-container-auth {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    gap: 1rem;
    padding-left: 2rem;
    border-left: 0.1rem solid var(--gray6);
  }

  .user-acronym {
    font-family: var(--inter);
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;

    color: var(--gray2);

    padding: 0.5rem;
    background-color: var(--brand1);
    border-radius: 50%;
    color: var(--gray10);
  }

  .user-name {
    font-family: var(--inter);
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;

    color: var(--gray2);
    cursor: pointer;
  }

  .settings-container {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding-left: 0.8rem;

    border-left: 0.2rem solid var(--gray5);

    a:last-child {
      border: 0.1rem solid var(--gray5);
      border-radius: 0.3rem;
      padding: 0.5rem 0.8rem;
    }
  }

  @media (width < 820px) {
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
    align-items: flex-start;
    gap: 0.5rem;

    z-index: 1;

    a {
      padding: 1rem;
    }

    .settings-container {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      padding: 1rem 0;
      border-top: 0.1rem solid var(--gray5);
      border-left: none;

      a:last-child {
        width: 90%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
      }
    }
  }
`;
