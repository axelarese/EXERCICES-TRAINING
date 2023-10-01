// Exercice 1 : etant donné le tableau [12, 23, 44, 10]
// => aider vous d'une boucle pour afficher seulement les nombres supérieurs a 20

let tab = [12, 23, 44, 10];

for (let i = 0; i < tab.length; i++) {
  if (tab[i] > 20) {
    console.log(tab[i]);
  }
}

// Exercice 2 : Étant donné le tableau ['matthieu', 'alexis', 'paul', 'machin', 'truc'. 'itachi'. 'saitama' ]
// => afficher seulement les prenoms qui contiennent plus de 5 caracteres

const array = ['matthieu', 'alexis', 'paul', 'machin', 'truc', 'itachi', 'saitama'];

for (i = 0; i < array.length; i++) {
  if (array[i].length > 5) {
    console.log(array[i]);
  }
}

// Exercice 3 : La fonction length fournie de base dans javascript permet d'avoir le nombre d'éléments dans un tableau. Coder votre propre fonction
// => créer votre propre fonction length :  (sans utiliser le length fourni par le langage js de base)
// => cette fonction prend un parametre en entrée qui sera un tableau
// => (aide) cette fonction contiendra une boucle principale, et vous aurez besoin d'utiliser une variable compteur dans la fonction
// => cette fonction retourne le nombre d'éléments qui se trouvent dans le tableau

function newLength(array) {
  let elementsNumber = 0
  for (const elements of array) {
    elementsNumber++
  }
  return elementsNumber;
}

let arrayExample = [10, 20, 30, 40];
console.log(newLength(arrayExample));

// Exercice 4 : Étant donné l'objet suivant :

let pokemons = [
  {
    nom: 'pikachu',
    numero: 23,
    type: ['electrique']
  },
  {
    nom: 'draco',
    numero: 148,
    type: ['eau', 'dragon']
  }
]

// 4.1 Affichez les types du pokemon draco

console.log(pokemons[1].type);

// 4.2 On suppose que le tableaux pokémon contiens maintenant les infos de tous les pokemon : afficher les informations de tous les pokemons de type feu]

for (let i = 0; i < pokemons.length; i++) {
  if (pokemons[i].type.includes("feu")) {
    console.log(pokemons[i]);
  }
}