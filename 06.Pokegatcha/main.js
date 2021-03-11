function pintaPokemon(){
    // Elegir un pokémon de forma aleatoria
    var numPokemonElegido = Math.floor(Math.random() * pokemons.length);
    console.log(numPokemonElegido);

    // Obtengo el nombre del Pokémon (String)
    var nombrePokemon = pokemons[numPokemonElegido-1];
    console.log(nombrePokemon);

    // Señalar en el documento HTML donde quiero colocar mi Pokémon
    var pokemon = document.getElementById('pokedex');
    console.log(pokemon);

    // Imagen del Pokemon
    var img = numPokemonElegido; 
    if (numPokemonElegido.toString().length == 1 ) { //5
        img = '00' + numPokemonElegido;
    } else if (numPokemonElegido.toString().length == 2) { //60
        img = '0' + numPokemonElegido;
    } 

    // Traer imagen del pokémon
    const pokePicBaseUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${img}.png`

    // Crear el contenido HTML que se mostrará en mi sitio
    pokemon.innerHTML = `
    <h1>${nombrePokemon}</h1>
    <img src="${pokePicBaseUrl}" />
    `
}

// Se ejecuta al momento de cargar la pagina
pintaPokemon();

