import styled from "styled-components";

export const Card = styled.div`
    width: 41.4375rem;
    height: 4.375rem;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    padding: 20px;

    .headerCard{
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 2rem;
        height: 2rem;
        border-radius: 100%;

        font-family: var(--inter);
        font-size: .875rem;

        background-color: var(--brand2);
        color: var(--white);
    }

      strong{
        font-size: .875rem;
        font-weight: 500;
        font-family: var(--lexend);
      }

      .created{
        color: var(--grey3)
        font-size: .75rem;
      }

      .comment{
        font-size: .875rem;
        color: var(--grey2)
      }
`