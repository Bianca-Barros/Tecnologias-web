import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const buscarTodos = () => {
  return axios.get(url)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao buscar contatos" }));
};

export const buscarPorId = (id) => {
  return axios.get(`${url}/${id}`)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao buscar contato" }));
};

export const adicionar = (contato) => {
  return axios.post(url, contato)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao adicionar contato" }));
};

export const modificar = (id, contato) => {
  return axios.put(`${url}/${id}`, contato)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao modificar contato" }));
};

export const remover = (id) => {
  return axios.delete(`${url}/${id}`)
    .then(response => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Erro ao remover contato" }));
};