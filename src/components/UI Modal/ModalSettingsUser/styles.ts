import styled from "styled-components";

export const ContainerSettingsUser = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  padding: 1rem 2rem;
  background-color: var(--gray10);

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  z-index: 1;

  button {
    font-family: var(--inter);
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;

    color: var(--gray2);

    background-color: transparent;
  }
`;
