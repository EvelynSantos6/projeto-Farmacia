import axios from "axios";

const api = axios.create({
    baseURL: 'https://crud-farmacia-t80.onrender.com/'
})

export const cadastrarCategoria = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}