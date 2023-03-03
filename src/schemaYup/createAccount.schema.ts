import * as yup from "yup";

export const CreateAccountSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("O email é obrigatório"),
  birthDate: yup
    .string()
    .matches(
      /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/,
      "Deve ser igual DD/MM/AAAA"
    )
    .required("A data de nascimento é obrigatória"),
  cpf: yup
    .string()
    .matches(
      /^([0-9]{3})\.([0-9]{3})\.([0-9]{3})-([0-9]{2})$/,
      "CPF deve conter o formato igual 999.999.999-99"
    )
    .required("cpf é obrigatório"),
  phoneNumber: yup
    .string()
    .matches(
      /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
      "Deve conter o formato igual +55(99)99999-9999"
    )
    .required("O celular é obrigatório"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .min(8, "Senha deve conter no mínimo 8 dígitos")
    .required("A senha é obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Tente novamente"),
  roadName: yup.string().required("A rua é obrigatória"),
  houseNumber: yup.string().required("O número da casa é obrigatório"),
  city: yup.string().required("A cidade é obrigatória"),
  state: yup.string().required("O estado é obrigatório"),
  complement: yup.string().required("O complemento é obrigatório"),
  zipCode: yup
    .string()
    .matches(/^[0-9]{5}.[0-9]{3}$/, "Deser conter o formato igual 99999-999")
    .required("O CEP é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
});
