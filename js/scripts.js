
let pokemonRepository = (function() {
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
   
         function getAll() {
            return pokemonList;
         }

         function add(pokemon) {
            return pokemonList.push(pokemon);
         }
         
         return {
            getAll: getAll,
            add: add,
         };

})();

let pokemon = {name: 'Charizard', height: 25, types: 'fire'};

pokemonRepository.getAll();
pokemonRepository.add(pokemon);


// for (let i = 0; i < pokemonList.length; i++){
//    document.write(`${pokemonList[i].name} <br> (height: ${pokemonList[i].height}) <br> (type: ${pokemonList[i].types}) <br><br>`);
//   if (pokemonList[i].height > 10){
//          document.write("<p>" + "This Pokemon is so big!" + "</p>");
//       }else if (pokemonList[i].height < 10 && pokemonList[i].height > 5){
//          document.write("<p>" + "This Pokemon is average." + "</p>");
//       }else {
//          document.write("<p>" + "This Pokemon is small." + "</p>");
//       }   
// }

pokemonRepository.getAll().forEach(function(value) {
      document.write(`${value.name} <br> (height: ${value.height}) <br> (type: ${value.types}) <br><br>`);
      if (value.height > 10){
            document.write("<p>" + "This Pokemon is so big!" + "</p>");
         }else if (value.height < 10 && value.height > 5){
            document.write("<p>" + "This Pokemon is average." + "</p>");
         }else {
            document.write("<p>" + "This Pokemon is small." + "</p>");
         }   
})