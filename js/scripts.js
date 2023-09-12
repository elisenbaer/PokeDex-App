
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
            pokemonList.appendChild(listPokemon);
            button.addEventListener('click', function(showDetails) {
               console.log(pokemon)
            });
         }

         function showDetails(pokemon){
            console.log(pokemon.name)
         }

         function add(pokemon) {
            return pokemonList.push(pokemon);
         }
         
         return {
            getAll: getAll,
            add: add,
            addListItem: addListItem
         };

})();

let pokemon = {name: 'Charizard', height: 25, types: 'fire'};

pokemonRepository.getAll();
pokemonRepository.add(pokemon);


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
})