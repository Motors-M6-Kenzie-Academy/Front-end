import * as yup from "yup";

export const ForgotPasswordSchema = yup.object({
  email: yup.string().email().required("Email é obrigatório"),
  resetCode: yup.string().required("Código de verificação é obrigatório"),
});
