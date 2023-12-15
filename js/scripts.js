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
   function loadDetails(pokemon) {
      let url = pokemon.detailsUrl;
      return fetch(url).then(function (response) {
         return response.json();
      }).then(function (details) {
         pokemon.imageUrl = details.sprites.front_default;
         pokemon.height = details.height;
         pokemon.types = details.types;
         showModal(pokemon);
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
   function showModal(pokemon) {
      let modalBody = $ (".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");

      //clear existing content in modal
      modalTitle.empty();
      modalBody.empty();

      //create an element for title/name of content
      let nameElement = $("<h1>" + pokemon.name + "</h1>");

      // // create img in modal content
      let imageElement = $('<img class="modal-img" style="width:50%">');
      imageElement.attr("src", pokemon.imageUrl);

      // // create element for pokemon height
      let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");

      // // create element for pokemon types
      let typesElement = $("<p>" + "Types: " + pokemon.types + "</p>");


// <!-- Commented out for exercise 1.10 -->
      let modalContainer = document.querySelector('#modal-container');

      //clear existing modal content
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');

      //add new modal content
         //create close button = "x" and hides modal when clicked
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'X';
      closeButtonElement.addEventListener('click', hideModal);


      //create and fill title element for modal = pokemon names
      // let nameElement = document.createElement('h1');
      // nameElement.innerText = pokemon.name;

      // //create and fill image element for each pokemon
      // let imageElement = document.createElement('img');
      // imageElement.classList.add('modal-img');
      // imageElement.src = pokemon.imageUrl;

      // //create height element for each pokemon
      // let heightElement = document.createElement('p');
      // heightElement.innerText = 'HEIGHT: ' + pokemon.height;

      // //create types element for each pokemon
      // let typesElement = document.createElement('p');
      // typesElement.innerText = 'TYPES: ' + pokemon.types;

      //adding elements to the modal
      modal.appendChild(closeButtonElement);
      modal.appendChild(nameElement);
      modal.appendChild(imageElement);
      modal.appendChild(heightElement);
      modal.appendChild(typesElement);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');

      modalContainer.addEventListener('click', (e) => {
         let target = e.target;
         if (target === modalContainer) {
            hideModal();
         }
      });
   }









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

let dialogPromiseReject;

function hideModal () {
   let modalContainer = document.querySelector('#modal-container');
   modalContainer.classList.remove('is-visible');

   if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
   }
}

window.addEventListener('keydown', (e) => {
   let modalContainer = document.querySelector('#modal-container');
   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal ();
   }
});