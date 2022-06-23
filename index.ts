/*
Arquivo utilizado para testes.
*/
import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log("Chamou nova funcao");
    }
});

$('body').novaFuncao();

