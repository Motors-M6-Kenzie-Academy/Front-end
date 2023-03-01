export interface IAddressRequest {
  roadName: string;
  houseNumber: number;
  complement: string;
  city: string;
  zipCode: string;
  state: string;
}

export interface IAddressReponse extends IAddressRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
