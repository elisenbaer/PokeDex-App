//Pokemon Repository IIFE
let pokemonRepository = (function() {
   let pokemonList = [];
   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   
   
      //adds object and name of each pokemon, pushes the pokemon to the pokemonList
      function add(pokemon) {
         if (
            typeof pokemon === "object" && "name" in pokemon
         ) {
            pokemonList.push(pokemon);
         }  else {
            console.log("pokemon is not correct");
         }
      }      
      
      //retrieves all items in the pokemonList
      function getAll() {
               return pokemonList;
            }

   //creates the individual 'pokemon' buttons that contain their individual details
   function addListItem(pokemon){
      let pokemonList = document.querySelector('.pokemon-list');
      let listPokemon = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
      button.addEventListener('click', () => {
         showDetails(pokemon);
         }
      )};
   
   
   //retrieves information on each pokemon (including name and details) from apiUrl in json format
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

   //retrieves indivudal pokemon details from apiUrl 
   function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
         return response.json();
      }).then(function (details) {
         item.imageUrl = details.sprites.front_default;
         item.height = details.height;
         item.types = details.types;
      }).catch(function(e) {
         console.error(e);
      });
   }

   //logs details of each pokemon to the console
   function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
         console.log(pokemon);
      });
   }

   //Displays Pokemon Modal
   function showModal(pokemon)
      let modalContainer = document.querySelector('#modal-container');

      //clear existing modal content
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');
   
      //add new modal content
   let closeButtonElement = document.createElement('button');
   closeButtonElement.classList.add('modal-close');
   
   
   //call all functions through return to gain access to each
   return {
      getAll: getAll,
      add: add,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
   };

})();


//calling functions in above IIFE
pokemonRepository. loadList (). then(function() {
   pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
  });
});

