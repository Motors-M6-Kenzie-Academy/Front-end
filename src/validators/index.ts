import * as yup from "yup";



  export const editUserSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-z ,.'-]+$/i,
        "Esse campo deve conter apenas letras, sem acentuações"
      ),
  
    email: yup.string().email("E-mail inválido"),

    password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Deve conter 8 caracteres,uma maiuscula, uma minuscula,um numero e um caractere especial"
    ),

    cpf: yup
    .string()
    .min(11, "O CPF deve conter 11 números"),

    phoneNumber: yup
    .string()
    .min(13, "O telefone deve conter no mínimo 13 números"),

    birthDate: yup
    .string()
    .matches(
      /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/,
      "O formato de data é DD/MM/AAAA"
    ),

    description:yup
    .string()
    .max(250, "Este campo deve conter no máximo 250 caracteres")

  })