import styled from "styled-components";

type FormGroupProps = {
  propColumn?: string;
  propGap?: string;
  propJustify?: string;
};

export const FormGroup = styled.div<FormGroupProps>`
  width: 100%;

  display: flex;

  flex-direction: ${(props) =>
    props.propColumn ? props.propColumn : "column"};

  gap: ${(props) => (props.propGap ? props.propGap : "0.8rem")};

  justify-content: ${(props) =>
    props.propJustify ? props.propJustify : "flex-start"};

  @media only screen and (width < 414px) {
    /* flex-direction: column; */
  }
`;
