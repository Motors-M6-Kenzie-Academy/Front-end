import styled from "styled-components";

export const Card = styled.div`
    width: 41.4375rem;
    height: 4.375rem;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    padding: 20px;
    margin-bottom: 15px;
        
    .headerCard{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        padding: 5px;
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

      button{
        font-size: 12px;
        border-radius: 50%;
      }

      .created{
        font-family: var(--inter);
        color: var(--grey3)
        font-size: .75rem;
      }

      .comment{
        font-family: var(--inter);
        font-size: .875rem;
        color: var(--grey2);
        padding: 10px;
      }
`