/*

cargo? = serve para permitir que eu utilize aquela variavel, que será instanciada como indefinida.

cargo? é um valor opcional, que pode ou não ser utilizado.

*/


interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}
function redirecionar(usuario: IUsuario ){
    if(usuario.cargo){
        //redirecionar(usuario.cargo);
    }
    //redirecionar para area do usuario
}
