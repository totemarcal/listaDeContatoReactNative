/*
Deixa a primeira letra maiuscula
exemplo => Exemplo
*/
const toUpperFirst = string => {
    return string[0].toUpperCase() + 
            string.slice(1)
}
 
export default toUpperFirst
