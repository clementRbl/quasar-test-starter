export default function usePhrase() {
    const sendPhrase = () => {
       return console.log('Je suis une phrase depuis le composable "test" ') 
   };
    
    const sendNumber = () => {
        const calcul = 1 + 1;
        return calcul;
   };

   const showPhrase = () => {
    console.log(`J'ai cliqué !`);
};

    return {
        sendPhrase,
        sendNumber,
        showPhrase
    }

}