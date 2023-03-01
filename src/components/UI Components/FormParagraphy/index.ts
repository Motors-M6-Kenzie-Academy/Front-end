import styled from "styled-components";

type FormParagraphyProps = {
  propFamily?: string;
  propStyle?: string;
  propFontSize?: string;
  propWeight?: string;

  propTextColor?: string;
};
export const FormParagraphy = styled.p<FormParagraphyProps>`
  font-family: var(
    ${(props) => (props.propFamily ? props.propFamily : "--inter")}
  );
  font-style: ${(props) => (props.propStyle ? props.propStyle : "normal")};
  font-size: ${(props) => (props.propFontSize ? props.propFontSize : "1rem")};
  font-weight: ${(props) => (props.propWeight ? props.propWeight : "600")};

  color: var(
    ${(props) => (props.propTextColor ? props.propTextColor : "--gray10")}
  );
  line-height: 2rem;
`;
