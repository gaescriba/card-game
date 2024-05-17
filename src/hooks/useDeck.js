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

  const minigame = () => {

    const targets = ["A", "2", "3", "4"];
    const randomTarget = targets[Math.floor(Math.random() * targets.length)];

    return randomTarget;

  }

  const checkWin = (leftTop, middleTop, rightTop, target) => {

    console.log(leftTop, middleTop, rightTop);

    if(leftTop != undefined && middleTop != undefined && rightTop != undefined){

      console.log(leftTop.value == target);
      console.log(middleTop.value == target);
      console.log(rightTop.value == target);

      if(leftTop.value == target && middleTop.value == target && rightTop.value == target){

        alert("Has ganado!");
        
      };

    };

  };

  const dummy = () => {

    console.log("dummy");

  };

  return { passCard, shuffleDeck, minigame, checkWin, dummy };

};

export default useDeck;
