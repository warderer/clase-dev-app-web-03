
var elHtml = "";
for (let index = 0; index < pokemons.length; index++) {
        var elPokemon = pokemons[index];
        elHtml = elHtml + `<h4>${elPokemon.id}. ${elPokemon.name.english}<h4>`
        console.log(elPokemon.name.english);
}
    
    // Señalar en el documento HTML donde quiero colocar mi Pokémon
    var pokemon = document.getElementById('pokedex');
    console.log(pokemon);

    pokemon.innerHTML = elHtml;