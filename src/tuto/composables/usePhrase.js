// Ici j'export les fonctions une par une pour pouvoir les utiliser séparement a l'endroit que je souhaite.
export const sendPhrase = () => {
     console.log('Je suis une phrase depuis le composable "test" ') 
};

export const sendNumber = () => {
     const calcul = 1 + 1;
     return calcul;
};

export const showPhrase = () => {
    console.log(`J'ai cliqué !`);
};


// Ici, j'export les deux fonctions dans une fonction pour pouvoir les utilisé les deux en même temps
 export const usePhrase = () => {
     return {
         sendPhrase: sendPhrase(),
         sendNumber: sendNumber(),
         showPhrase: showPhrase()
     }
 };



