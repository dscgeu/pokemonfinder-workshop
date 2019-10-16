
let search_btn = document.getElementById('btn')
let search_input = document.getElementById('pokemon_input')
let dom_pokemon = document.getElementById('pokemon-search-result')

function onSearchButtonPressed (event) {
   let input = search_input.value
   if(input.length == 0)
    return

    $.get(`https://pokeapi.co/api/v2/pokemon/${input}`,  // url
      function (data, textStatus, jqXHR) {  // success callback
         // alert('status: ' + textStatus + ', data:' + data);
         // console.log(data)
          dom_pokemon.innerHTML = `
          <div class="col-12 col-md-4 col-md-3 m-auto pokemon-card">
          <img src="${data.sprites.back_default}" alt="pokemon" class="pokemon-image">
          <div class="pokemon-card-name">
              <span class="name">${data.name}</span>
          </div>
          <div class="pokemon-card-stats py-3">
              <h4 class="stats-title">Stats</h4>
              <strong class="stats d-block">Weight: ${data.weight}</strong>
              <strong class="stats d-block">Base Experience: ${data.base_experience}</strong>
              <strong class="stats d-block">Height: ${data.height}</strong>
              <strong class="stats d-block">Order: ${data.order}</strong>
          </div>
         </div>
          
          `

          search_input.value=""

    }).fail(function(){
        dom_pokemon.innerHTML=`<h3 class="error-text">Sorry No Result Found ! </h3>`
        search_input.value=""
    });



}

search_btn.addEventListener("click", function(event){
    onSearchButtonPressed(event)
})

search_input.addEventListener("keypress", function(event) {
    if(event.which == 13)
    onSearchButtonPressed(event)
})
