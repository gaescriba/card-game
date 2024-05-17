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

  const shuffleDeck = deck => {

    let currentIndex = deck.length;
    while(currentIndex != 0){

      let randomCard = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [deck[currentIndex], deck[randomCard]] = [deck[randomCard], deck[currentIndex]];
    }

    return deck;

  }

  const dummy = () => {

    console.log("dummy");

  };

  return { passCard, shuffleDeck, dummy };

};

export default useDeck;
