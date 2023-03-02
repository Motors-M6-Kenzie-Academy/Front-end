import styled from "styled-components";

type ContainerProps = {
  propColor?: string;
  propFamily?: string;
  propSize?: string;
  propStyle?: string;
  propWeight?: string;
};

export const Container = styled.span<ContainerProps>`
  font-family: var(
    ${(props) => (props.propFamily ? `--${props.propFamily}` : "--inter")}
  );
  font-style: ${(props) => (props.propStyle ? props.propStyle : "normal")};
  font-weight: ${(props) => (props.propWeight ? props.propWeight : "600")};
  font-size: ${(props) => (props.propSize ? props.propSize : "0.8rem")};
  color: ${(props) => (props.propColor ? props.propColor : "#212529")};
`;
