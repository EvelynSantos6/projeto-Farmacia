export default interface Categoria {
    nome: string | number | readonly string[] | undefined;
    length: number;
    id: number;
    descricao: string;
}