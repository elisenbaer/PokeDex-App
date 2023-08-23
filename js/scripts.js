
let pokemonList = [
    { 
    name: "Bulbasaur", 
    },
    { 
    name: "Pikachu",
    },
    { 
    name: "Dewgong", 
    },
];

 for (let i = 0; i < pokemonList.length; i++) {
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) <br>`);
 }
