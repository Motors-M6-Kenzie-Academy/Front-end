// Imports Extras Libs
import api from "../services/api";

type getDataProps = {
  endpoint: string;
  method?: string;
  data?: object;
  id?: string;
  token?: string;
};

export const getData = async ({
  endpoint,
  data,
  method,
  token,
  id,
}: getDataProps) => {
  switch (endpoint) {
    case "user":
      // -- Update User
      if (method === "patch") {
        const response = await api
          .patch(`user/${id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((resp) => resp.status)
          .catch((err) => err.response);

        return response;
      }

      break;

    case "address":
      // -- Update Address
      if (method === "patch") {
        const response = await api
          .patch(`address/${id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((resp) => resp.status)
          .catch((err) => err.response);

        return response;
      }

      break;
  }
};
