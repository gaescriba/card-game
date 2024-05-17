import { defaultCard } from '../utils/constants.js'
const useDeck = () => {

  const passCard = (leftDeck, rightDeck) => {
    const passingCard = leftDeck.shift();
    if(passingCard.suit != defaultCard.suit) {
      rightDeck.unshift(passingCard);
    }else{
      leftDeck = [defaultCard];
    };

    console.log(leftDeck.length == 0);
    if(leftDeck.length == 0){
      leftDeck = [defaultCard];
    }

    return { leftDeck, rightDeck };
  };

  const dummy = () => {

    console.log("dummy");

  };

  return { passCard, dummy };

};

export default useDeck;
