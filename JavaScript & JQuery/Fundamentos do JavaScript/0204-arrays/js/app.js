var videogames = ["PS4", "XBOX", 'Nintendo Wii'];
console.log(videogames);
console.log(videogames[0]);
console.log(videogames.length);

// Retornar sempre o ultimo item do Array
var totalItens = videogames.length;
console.log(totalItens - 1);

// Podemos utilizar o length para contar caracteres de Strings
console.log(videogames[0].length);
console.log(videogames[1].length);

// Adicionar itens no Array
videogames.push("Polystation")
console.log(videogames);

// Buscar item pelo nome
buscarItem = videogames.indexOf("PS4");
console.log(buscarItem);

// Remover itens do Array
// splice(indexInicial, quantosQueroRemover)
videogames.splice(0, 1);
console.log(videogames);
