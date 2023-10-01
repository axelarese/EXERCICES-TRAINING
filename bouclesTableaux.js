// niveau 0 : 
// Étant donné le tableau [12, 23, 44, 10] stocké dans une variable nommée tab
// 1. Aider vous d'une boucle for(let i = 0; ... pour afficher chaque éléments du tableau
// 2. Améliorer le code pour afficher seulement les éléments qui sont strictement supérieurs à 20
// 3. Refaire le programme en vous utilisant à la place de la boucle for(let i = 0; ... une autre boucle :
//        => for(const ele of ...)
//        => forEach(...
//        => while(...

// Question 1 : 

let tab = [12, 23, 44, 10];

for (i=0; i<tab.length;i++) {
  console.log(tab[i]);
}

// Question 2 : 

for (i=0; i<tab.length;i++) {
    if (tab[i]>20) { 
    console.log(tab[i]); }
}

// Question 3 : 

let i = 0;

while (i < tab.length) {
  if (tab[i]>20) {
    console.log(tab[i])
  }
  i++;
}


// niveau 1 : 
// Étant donné un tableau contenant les valeurs ['matthieu', 'alexis', 'paul', 'machin', 'truc', 'itachi', 'saitama' ]
// => afficher seulement les prénoms qui contiennent plus de 5 caracteres

let arrayNames = ['matthieu', 'alexis', 'paul', 'machin', 'truc', 'itachi', 'saitama' ];

for (i=0; i<arrayNames.length; i++) {
  if (arrayNames[i].length > 5) {
    console.log(arrayNames[i]);
  }
}

