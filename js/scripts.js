
let pokemonList = [
    { 
    name: "Bulbasaur", 
    height: 7, 
    types: ["grass", "poison"] 
    },
    { 
    name: "Pikachu",
    height: 4, 
    types: ["electric"] 
    },
    { 
    name: "Dewgong", 
    height: 17, 
    types: ["water", "ice"] 
    },
];

 for (let i = 0; i < pokemonList.length; i++) {
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) <br>`);
 }
