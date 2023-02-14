import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: auto;
  height: 4rem;
  background: #fdfdfd;

  padding: 0 6rem;
  border-bottom: 0.2rem solid #dee2e6;

  svg {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 910px) {
    svg {
      display: inline-block;
      font-size: 2rem;
    }
  }
`;

export const Logo = styled.div``;

export const Right = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  div:last-child {
    display: flex;
    gap: 2rem;
  }

  @media (max-width: 910px) {
    display: none;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  height: 4rem;

  padding-right: 2rem;
  border-right: 0.2rem solid #dee2e6;

  a {
    font-family: "Inter";
    font-style: normal;

    font-size: 1rem;
    line-height: 2rem;
    color: #495057;
  }
`;

export const SignIn = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    font-family: "Inter";
    font-style: normal;

    font-size: 1rem;
    line-height: 2rem;
    color: #495057;
    background-color: white;
  }

  button:last-child {
    border: 0.1rem solid #adb5bd;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 0.8rem;
  }
`;
