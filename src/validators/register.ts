import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .min(8, "Senha deve conter no mínimo 8 dígitos")
    .required("A senha é obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Tente novamente"),
  cpf: yup.string().required("cpf é obrigatório"),
  phoneNumber: yup.string().required("O celular é obrigatório"),
  birthDate: yup.string().required("A data de nascimento é obrigatória"),
  roadName: yup.string().required("A rua é obrigatória"),
  houseNumber: yup.string().required("O número da casa é obrigatório"),
  city: yup.string().required("A cidade é obrigatória"),
  state: yup.string().required("O estado é obrigatório"),
  complement: yup.string().required("O complemento é obrigatório"),
  zipCode: yup.string().required("O CEP é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
});
