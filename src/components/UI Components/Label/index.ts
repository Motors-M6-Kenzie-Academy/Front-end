import styled from "styled-components";

type UILabelProps = {
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: number;
  fontSize?: string;
  color?: string;
};

export const UILabel = styled.label<UILabelProps>`
  font-family: var(
    ${(props) => (props.fontFamily ? `--${props.fontFamily}` : "--inter")}
  );
  font-style: ${(props) => (props.fontSize ? props.fontStyle : "normal")};
  font-weight: ${(props) => (props.fontSize ? props.fontWeight : "600")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.8rem")};
  color: ${(props) => (props.color ? props.color : "#212529")};

  @media (width < 414px) {
  }
`;
