/*
Como importar bibliotecas, sem alterar os valores de Type

*/

import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log("Chamou nova funcao");
    }
});

$('body').novaFuncao();

