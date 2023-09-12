
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

         function addListItem(pokemon){
            let pokemonList = document.querySelector('.pokemon-list');
            let listPokemon = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button-class');
            listPokemon.appendChild(button);
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


})