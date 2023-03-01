import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
