import styled from "styled-components";

interface IContainerIsActiveProps {
  backgroundColor: string;
  color: string;
}

export const ContainerCard = styled.div`
  width: 312px;
  height: 350px;

  background-color: var(--gray9);

  .container--img {
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border: 2px solid var(--brand1);
      border-radius: 3px;
    }
  }

  .container--content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-family: "Lexend", sans-serif;
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
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }

  .container--announcer {
    display: flex;
    align-items: center;
    gap: 10px;

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      border-radius: 100%;

      font-family: "Inter", sans-serif;

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
      gap: 10px;

      .tag {
        background-color: var(--brand4);
        color: var(--brand1);
        padding: 8px;
      }
    }

    strong {
      font-family: "Lexend", sans-serif;
    }
  }
`;

export const ContainerIsActive = styled.div<IContainerIsActiveProps>`
  width: fit-content;
  padding: 7px;
  position: relative;
  top: 37px;
  left: 8px;

  font-family: "Inter", sans-serif;

  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;
