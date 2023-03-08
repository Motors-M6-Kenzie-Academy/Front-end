export interface ISubmitFormData {
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
  description: string;
}

export type ModalUpdateUserProps = {
  handleButtonToggle: () => void;
};

export type UpdateStatement = {
  status: number;
  message: string;
};
