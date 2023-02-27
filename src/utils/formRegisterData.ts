type InputsProps = {
  label: string;
  placeHolder: string;
  type: string;
};

type InputsAccountTypeProps = {
  label: string;
  bgColor: string;
  border?: boolean;
};

export const inputsUserForm: InputsProps[] = [
  { label: "Nome", placeHolder: "Ex: Samuel Leão", type: "text" },
  { label: "Email", placeHolder: "Ex: samuel@kenzie.com.br", type: "email" },
  { label: "CPF", placeHolder: "000.000.000-00", type: "number" },
  { label: "Celular", placeHolder: "(DDD) 90000-0000", type: "text" },
  { label: "Data de Nascimento", placeHolder: "00/00/00", type: "text" },
  { label: "Descrição", placeHolder: "Digitar descrição", type: "text" },
];

export const inputsAddressForm: InputsProps[] = [
  { label: "CEP", placeHolder: "00000.000", type: "number" },
  { label: "Rua", placeHolder: "Digitar Rua", type: "text" },
];

export const inputsAddressFirstSelectForm: InputsProps[] = [
  { label: "Estado", placeHolder: "Digitar Estado", type: "text" },
  { label: "Cidade", placeHolder: "Digitar Cidade", type: "text" },
];
export const inputsAddressSecondSelectForm: InputsProps[] = [
  { label: "Número", placeHolder: "Digitar Número", type: "number" },
  { label: "Complemento", placeHolder: "Ex: apart 307", type: "text" },
];

export const inputsAccountTypeForm: InputsAccountTypeProps[] = [
  { bgColor: "blue", label: "Comprador" },
  { bgColor: "transparent", label: "Anunciante", border: true },
];
