/*
GENERIC TYPES

<> definição de DIAMANTE - Quando não souber o que vai receber, coloque a letra T.

DIAMANTE = ele retorna os numeros todos iguais. Não pode ser String / Number.
todos number, ou todos String

*/

function adicionaApendiceALista<T>(array: any[],valor: T){
    return array.map(item => item + valor);
}

adicionaApendiceALista([1,2,3],1);  