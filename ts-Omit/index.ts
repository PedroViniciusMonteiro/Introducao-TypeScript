/*

OMIT = Serve para "excluir" certa propriedade na interface que vamos criar.
colocado antes do diamante + interface extendida + propriedade a ser retirada.

*/

interface IPessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}
interface Brasileiro extends Omit<IPessoa, 'nacionalidade'> {
}
