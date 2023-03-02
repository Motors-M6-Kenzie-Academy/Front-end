import styled from "styled-components";

export const FormContainer = styled.form`
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
`;

