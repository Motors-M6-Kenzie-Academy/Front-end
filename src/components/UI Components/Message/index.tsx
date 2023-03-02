import { Container } from "./styles";

type UIErrorMessageProps = {
  propIsError?: boolean;
  propIsSuccess?: boolean;
  propMessage: string;
};
export const UIMessage = ({
  propIsError,
  propIsSuccess,
  propMessage,
}: UIErrorMessageProps) => {
  return (
    <>
      {propIsError && <Container propColor="red">{propMessage}</Container>}
      {propIsSuccess && <Container propColor="green">{propMessage}</Container>}
    </>
  );
};
