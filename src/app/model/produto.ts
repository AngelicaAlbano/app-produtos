import { Categoria } from "./categoria.enum";

export class Produto {
    id: string;
    nome: string;
    valor: number;
    marca: string;
    quantidade: number;
    tipo: Categoria;
    garantia: string;
}
