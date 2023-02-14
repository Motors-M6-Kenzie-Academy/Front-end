import styled from "styled-components";

interface IContainerIsActiveProps {
  backgroundColor: string;
  color: string;
}

export const ContainerCard = styled.div`
  width: 19.5rem;
  height: 22.875rem;

  padding: 0.3125rem;
  background-color: var(--gray9);

  .container--img {
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border: 0.125rem solid var(--brand1);
      border-radius: 0.1875rem;
    }
  }

  .container--content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  h2 {
    font-family: var(--lexend);
    font-weight: 600;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1; /* number of lines to show */
    line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.2;
  }

  .container--description {
    font-size: 0.875rem;
    font-family: var(--inter);
    font-weight: 400;
  }

  .container--announcer {
    display: flex;
    align-items: center;
    gap: 0.625rem;

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;
      border-radius: 100%;

      font-family: var(--inter);

      background-color: var(--brand2);
      color: var(--white);
    }
  }

  .container--tag--price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .container--tags {
      display: flex;
      gap: 0.625rem;

      .tag {
        background-color: var(--brand4);
        color: var(--brand1);
        padding: 0.5rem;
      }
    }

    strong {
      font-family: var(--lexend);
    }
  }
`;

export const ContainerIsActive = styled.div<IContainerIsActiveProps>`
  width: fit-content;
  padding: 0.4375rem;
  position: relative;
  top: 2.3125rem;
  left: 0.5rem;

  font-family: var(--inter);

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;
