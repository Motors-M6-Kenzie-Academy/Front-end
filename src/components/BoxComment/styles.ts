import styled from "styled-components";

export const DivComment = styled.div`
  width: 100%;
  max-width: 750px;
  height: 18.0625rem;
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  border-radius: 0.25rem;
  padding: 20px;

  @media screen and (max-width: 900px) {
    width: 90%;
  }

  .headerBox {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 100%;

    font-family: var(--inter);
    font-size: 14px;

    background-color: var(--brand2);
    color: var(--white);
  }

  strong {
    font-size: 0.875rem;
    font-weight: 500;
    font-family: var(--lexend);
  }

  input {
    width: 100%;
    height: 6.25rem;
    border: var(--gray7);
    border-radius: 0.25rem;
    padding: 10px;
    font-size: 16px;
  }

  placeholder {
    color: var(--gray3);
    font-size: 1rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 15px;

    color: var(--gray3);
    font-size: 12px;
    font-family: var(--lexend);
  }

  .ideia {
    background-color: var(--gray7);
    padding: 5px;
    border-radius: 1.5rem;
  }

  form {
    border: var(--gray7);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  Button {
    margin-left: 500px;
  }

  @media screen and (min-width: 43.75rem) {
    margin: 0 5.625rem;
  }
`;
