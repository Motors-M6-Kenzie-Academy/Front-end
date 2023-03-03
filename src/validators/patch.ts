import * as yup from "yup";

export const editUserSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-z ,.'-]+$/i,
      "Esse campo deve conter apenas letras, sem acentuações"
    ),

  email: yup.string().email("E-mail inválido"),

  cpf: yup.string().min(11, "O CPF deve conter 11 números"),

  phoneNumber: yup.string().min(17, "O telefone deve conter 13 números"),

  birthDate: yup
    .string()
    .matches(
      /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/,
      "O formato de data é DD/MM/AAAA"
    ),

  description: yup
    .string()
    .max(250, "Este campo deve conter no máximo 250 caracteres"),
});
