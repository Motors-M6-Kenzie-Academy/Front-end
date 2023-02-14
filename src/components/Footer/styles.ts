import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;

  height: 8.75rem;
  width: 100%;
  background-color: var(--black);
  color: var(--white);

  font-family: var(--inter);
  font-weight: 600;

  position: fixed;
  bottom: 0;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }

  h3 {
    font-size: 1.25rem;

    .subtitle {
      font-size: 0.875rem;
    }
  }

  p {
    font-size: 0.875rem;
    font-weight: 300;
  }

  button {
    background: var(--gray1);
    height: 2.6875rem;
    width: 2.8125rem;
    border-radius: 0.3125rem;
  }
`;
