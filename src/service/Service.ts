import axios from "axios";

const api = axios.create({
    baseURL: 'https://crud-farmacia-t80.onrender.com/'
})

export const buscar = async (url: string, setDados: Function, header: Object = {}) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
}

export async function cadastrar (url: string, dados: any, setDado: Function, config: Object) {
    try {
    const resposta = await api.post(url, dados, config);
    setDado(resposta.data);
    } catch (error) {
    throw new Error("Erro ao cadastrar: " + error);
    }
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}