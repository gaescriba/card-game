import { defaultCard } from '../utils/constants.js';
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
    };

    return { leftDeck, rightDeck };
  };

  const shuffleDeck = deck => {

    let currentIndex = deck.length;
    while(currentIndex != 0){

      let randomCard = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [deck[currentIndex], deck[randomCard]] = [deck[randomCard], deck[currentIndex]];
    };

    return deck;

  };

  const startMinigame = () => {

    const targets = ["A", "2", "3", "4"];
    const randomTarget = targets[Math.floor(Math.random() * targets.length)];

    return randomTarget;

  };

  const checkWinner = (leftTop, middleTop, rightTop, target) => {

    if(leftTop == undefined) {

      leftTop = defaultCard;

    };

    if(middleTop == undefined) {

      middleTop = defaultCard;

    };
    if(rightTop == undefined) {

      rightTop = defaultCard;

    };

    console.log(leftTop.value);
    console.log(middleTop.value);
    console.log(rightTop.value);

    console.log(leftTop.value == target);
    console.log(middleTop.value == target);
    console.log(rightTop.value == target);

    if(leftTop.value == target && middleTop.value == target && rightTop.value == target){

      alert("Has ganado!");

    };

  };

  const dummy = () => {

    console.log("dummy");

  };

  return { passCard, shuffleDeck, startMinigame, checkWinner, dummy };

};

export default useDeck;
