/* Filtre as idades maiores ou iguais a 18 anos.
Não use laços de repetição. 
*/

const idades = [12, 18, 25, 10, 40, 15, 30];

const filtradas = idades.filter(
    function (idade) {
        return idade >= 18
    }
)

console.log(filtradas)