export interface IAdsRequest {
  title: string;
  description: string;
  typeVehicle: "motorbike" | "car";
  typeAds?: "sell" | "bid";
  releaseYear: string;
  mileage: string;
  price: string;
  cover: string;
  gallery_image: string;
  isPublished?: string;
}

export interface IAds extends IAdsRequest {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAdsResponse {
  data: IAds[];
}
