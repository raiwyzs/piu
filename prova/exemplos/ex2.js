/* Atualize os preços em 10%.
Não use laços de repetição. 
*/

const precos = [100, 200, 50, 10];
const reajustados = precos.map(
    (p) => {
        return p * 1.1
    }
)
console.log(reajustados)