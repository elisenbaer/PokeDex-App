
let pokemonRepository = (function() {
   let pokemonList = [];
   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   
   function add(pokemon) {
      if (
         typeof pokemon === "object" && "name" in pokemon
      ) {
         pokemonList.push(pokemon);
      }  else {
         console.log("pokemon is not correct");
      }
   }      
   
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


   
   function loadList() {
      return fetch(apiUrl).then(function (response) {
         return response.json();
      }).then(function (json) {
         json.results.forEach(function (item) {
            let pokemon = {
               name: item.name,
               detailsUrl: item.url
            };
            add(pokemon);
         });
      }).catch(function (e) {
         console.error(e);
      })
   }

   function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
         return response.json();
      }).then(function (details) {
         item.imageUrl = details.sprites.front_default;
         item.height = details.height;
   return {
      getAll: getAll,
      add: add,
      addListItem: addListItem,
      loadList: loadList
   };

})();

let pokemon = {name: 'Charizard', height: 25, types: 'fire'};

pokemonRepository.getAll();
pokemonRepository.add(pokemon);

pokemonRepository. loadList (). then(function() {
   pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
  });
});

