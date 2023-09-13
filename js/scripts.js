
let pokemonRepository = (function() {
   let pokemonList = [];
   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   
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
               console.log(pokemon.name)
            });
         }

         function showDetails(pokemon){
            console.log(pokemon.name)
         }

         function add(pokemon) {
            if (
               typeof pokemon === "object" && "name" in pokemon
            ) {
               repository.push(pokemon);
            }  else {
               console.log("pokemon is not correct");
            }
         }
         
         function loadList() {
            return fetch(apiUrl).then(function (response) {
               return response.json();
            }).then(function (json) {
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