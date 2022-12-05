document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemon_name").value;
  const pokemon_name = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    .then((response) => response.json())
    .then((data) => {
      // const pokemonDesc = pokemonDesc["flavor_text_entries"][9]["flavor_text"];

      document.querySelector(".pokemon_box").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon ${data.name}"
        />
      </div>
      <div class="pokemon_info">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Weight: ${data.weight}</p>
        <p>Height: ${data.height}</p>`;
    })
    .catch((err) => {
      document.querySelector(".pokemon_box").innerHTML = `
      <h4>Pokemon not found</h4>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}