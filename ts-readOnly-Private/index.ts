import { type } from "os";

interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof ICachorro]-?: ICachorro[K]; //-? remove os valores opcionais.
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }
}

const cao = new MeuCachorro('Apolo', 14);
