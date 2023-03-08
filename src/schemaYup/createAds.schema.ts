import * as yup from "yup";

export const CreateAdsSchema = yup.object({
  title: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  typeVehicle: yup.string().required("Campo obrigatório"),
  releaseYear: yup.string().required("Campo obrigatório"),
  mileage: yup.string().required("Campo obrigatório"),
  price: yup.string().required("Campo obrigatório"),
  cover: yup.string().required("Campo obrigatório"),
  gallery_image: yup.string().required("Campo obrigatório"),
});
