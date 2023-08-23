
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


 for (let i = 0; i < pokemonList.length; i++){
    document.write(`${pokemonList[i].name} <br> (height: ${pokemonList[i].height}) <br> (type: ${pokemonList[i].types}) <br><br>`);
    if (pokemonList[i].height > 10){
        document.write("This Pokemon is so big!<br><br>");
     }else if (pokemonList[i].height < 10 && pokemonList[i].height > 5){
        document.write("This Pokemon is average.<br><br>");
     }else {
        document.write("This Pokemon is small.<br><br>");
     }   
}




