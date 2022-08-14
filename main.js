//require("dotenv").config();
let pokemon1;
let pokemon2;

//const api_key = process.env.SECRET_API_KEY;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let randomNum = getRandomInt(152)
let randomNum2 = getRandomInt(152)

window.onload = function() {
    getPokemon1()
    getPokemon2()
}  

const getPokemon1 = () => {
P.getPokemonByName(getRandomInt(152))
  .then(function(response) {
    console.log(response.species.name)
    pokemon1 = response
    console.log(response.stats[0].base_stat + response.stats[1].base_stat + response.stats[2].base_stat + response.stats[3].base_stat + response.stats[4].base_stat + response.stats[5].base_stat) 
    console.log(pokemon1)
    const image = document.getElementById('pic1')
    image.src = response.sprites.back_default
    document.getElementById('one-user').innerHTML= `${response.species.name.charAt(0).toUpperCase()}${response.species.name.slice(1)}`
  })
}

const getPokemon2 = () => {
  P.getPokemonByName(getRandomInt(152))
    .then(function(response) {
      console.log(response.species.name)
      pokemon2 = response
      console.log(response.stats[0].base_stat + response.stats[1].base_stat + response.stats[2].base_stat + response.stats[3].base_stat + response.stats[4].base_stat + response.stats[5].base_stat) 
      console.log(pokemon2)
      const image2 = document.getElementById('pic2')
      image2.src = response.sprites.front_default
      document.getElementById('two-user').innerHTML= `${response.species.name.charAt(0).toUpperCase()}${response.species.name.slice(1)}`
    })
}

const showPokemon1 = () => {
  getPokemon1()
  getPokemon2()
  const oneUser = document.getElementById('one-user')
  const twoUser = document.getElementById('two-user')
  const image = document.createElement('img')
  const image2 = document.createElement('img')
    image.src = pokemon1.sprites.back_default
    image2.src = pokemon2.sprites.front_default
    document.getElementById('one-user').innerHTML= `This Pokemon is ${pokemon1.species.name}`
    document.getElementById('two-user').innerHTML= `This Pokemon is ${pokemon2.species.name}`
    oneUser.append(image)
    twoUser.append(image2)
    document.getElementById('winner').innerHTML= `Who is Stronger?`
}

const battlePokemon = () => {
  if(pokemon1.stats[0].base_stat + pokemon1.stats[1].base_stat + pokemon1.stats[2].base_stat + pokemon1.stats[3].base_stat + pokemon1.stats[4].base_stat + pokemon1.stats[5].base_stat > pokemon2.stats[0].base_stat + pokemon2.stats[1].base_stat + pokemon2.stats[2].base_stat + pokemon2.stats[3].base_stat + pokemon2.stats[4].base_stat + pokemon2.stats[5].base_stat) {
    document.getElementById('winner').innerHTML = `${pokemon1.species.name.charAt(0).toUpperCase()}${pokemon1.species.name.slice(1)} is the winner!`
  } else if (pokemon1.stats[0].base_stat + pokemon1.stats[1].base_stat + pokemon1.stats[2].base_stat + pokemon1.stats[3].base_stat + pokemon1.stats[4].base_stat + pokemon1.stats[5].base_stat < pokemon2.stats[0].base_stat + pokemon2.stats[1].base_stat + pokemon2.stats[2].base_stat + pokemon2.stats[3].base_stat + pokemon2.stats[4].base_stat + pokemon2.stats[5].base_stat) {
    document.getElementById('winner').innerHTML = `${pokemon2.species.name.charAt(0).toUpperCase()}${pokemon2.species.name.slice(1)} is the winner!`
  } else {
    document.getElementById('winner').innerHTML =`${pokemon1.species.name.charAt(0).toUpperCase()}${pokemon1.species.name.slice(1)} and ${pokemon2.species.name.charAt(0).toUpperCase()}${pokemon2.species.name.slice(1)} would tie`
  }
} 