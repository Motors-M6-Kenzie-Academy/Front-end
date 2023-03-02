import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

export const RequestAPI = async (
  endpoint: string,
  method?: string,
  data?: object,
  id?: string
) => {
  switch (endpoint) {
    // *** Endpoint's do User

    case "user":
      // Criação do usuário
      if (method === "post") {
        const response = await api
          .post(`${endpoint}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      // Listagem de todos os usuários
      if (method === "get") {
        const response = await api
          .get(`${endpoint}`)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);

        return response;
      }
      break;

    case `user/${id}`:
      // Listagem do usuário
      if (method === "get") {
        const response = await api
          .get(`${endpoint}/${id}`)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      // Update do usuário
      if (method === "patch") {
        const response = await api
          .patch(`${endpoint}/${id}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      // Delete do usuário
      if (method === "delete") {
        const response = await api
          .delete(`${endpoint}/${id}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      break;

    case "signin":
      // Login do usuário
      if (method === "post") {
        const response = await api
          .post(`${endpoint}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      break;

    case "user/reset":
      // Reset de senha do usuário
      if (method === "post") {
        const resp = await api
          .post(`${endpoint}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return resp;
      }
      break;

    case `address/${id}`:
      // Update de endereço do usuário
      if (method === "patch") {
        const response = await api
          .patch(`${endpoint}/${id}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      break;

    case "user/announcers":
      // Listagem de announcers do usuário
      if (method === "get") {
        const response = await api
          .get(`${endpoint}`)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      break;

    // *** Endpoint's do Ads

    case "ads":
      // Criação do ads
      if (method === "post") {
        const response = await api
          .post(`${endpoint}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      break;

    case `ads/${id}`:
      // Listagem do Ad
      if (method === "get") {
        const response = await api
          .get(`${endpoint}/${id}`)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      // Update do Ad
      if (method === "patch") {
        const response = await api
          .patch(`${endpoint}/${id}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      // Delete do Ad
      if (method === "delete") {
        const response = await api
          .delete(`${endpoint}/${id}`)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      break;

    case `ads`:
      // Listagem de todos os ads
      if (method === "get") {
        const response = await api
          .get(`${endpoint}`)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      break;

    // *** Endpoint's do Comments

    case `comments/${id}`:
      // Criação do comments
      if (method === "post") {
        const response = await api
          .post(`${endpoint}/${id}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      // Listagem do comment
      if (method === "get") {
        const response = await api
          .get(`${endpoint}/${id}`)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      // Delete do comment
      if (method === "delete") {
        const response = await api
          .delete(`${endpoint}/${id}`, data)
          .then((resp) => resp.data)
          .catch((err) => err.response.data);
        return response;
      }
      break;
  }
};

export default api;
