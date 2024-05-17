import { useState, useEffect } from 'react';

import makeDeck from './utils/makeDeck.js';

import useDeck from './hooks/useDeck.js';

import Card from './components/Card.jsx';

import { defaultCard } from './utils/constants.js';

const App = () => {

  const { passCard, shuffleDeck, startMinigame, checkWinner, dummy } = useDeck();

  const [leftDeck, setLeftDeck] = useState(makeDeck());
  const [middleDeck, setMiddleDeck] = useState([{suit: "X", value: '0'}]);
  const [rightDeck, setRightDeck] = useState([{suit: "X", value: '0'}]);
  const [minigameTarget, setMinigameTarget] = useState(0);
  const [minigameStarted, setMinigameStarted] = useState(false);
  const [change, setChange] = useState();

  const handlePass = option => {
    setChange(!change);
    let left;
    let right;
    switch(option){
      case 0:
        left = [leftDeck, setLeftDeck];
        right = [middleDeck, setMiddleDeck];
      break;

      case 1:
        left = [middleDeck, setMiddleDeck];
        right = [rightDeck, setRightDeck];
      break;

      case 2:
        left = [rightDeck, setRightDeck];
        right = [leftDeck, setLeftDeck];
      break;
    }

    const refreshDecks = (left, right) => {

      const decks = passCard(left[0], right[0]);
      const setFirstDeck = left[1];
      const setSecondDeck = right[1];
      setFirstDeck(decks.leftDeck);
      setSecondDeck(decks.rightDeck);

    }

    refreshDecks(left,right);

    checkWinner(leftDeck[0], middleDeck[0], rightDeck[0], minigameTarget);

    setChange(!change);
  }

  const handleMinigame = () => {
    
    setChange(!change);
    const shuffledDeck = shuffleDeck(makeDeck());
    setLeftDeck(shuffledDeck);
    setMiddleDeck([defaultCard]);
    setRightDeck([defaultCard]);

    const target = startMinigame();
    setMinigameTarget(target);

    if(!minigameStarted){
      setMinigameStarted(true);
    }

    setChange(!change);
    
  };

  useEffect(()=> {
    setLeftDeck(leftDeck);
    setMiddleDeck(middleDeck);
    setRightDeck(rightDeck);
  },[change]);

  return (
    <>
      <div className="grid grid-cols-3 gap-5 items-center justify-center">
        <div className="bg-green-300" onClick={() => handlePass(0)}>
          <Card suitProp = { leftDeck[0].suit } valueProp = { leftDeck[0].value }/>
        </div>
        <div className="bg-red-400" onClick={() => handlePass(1)}>
          <Card suitProp = { middleDeck[0].suit  } valueProp = { middleDeck[0].value }/>
        </div>
        <div className="bg-blue-500"onClick={() => handlePass(2)}>
          <Card suitProp = { rightDeck[0] ? rightDeck[0].suit : 'X' } valueProp = { rightDeck[0] ? rightDeck[0].value : '0' }/>
        </div>
      </div>
      <button onClick={handleMinigame}>
        { minigameStarted ? "Reset" : "Start" }
      </button>
      <br/>
      {
        minigameStarted &&
        <>
          El valor es: {minigameTarget}
        </>
      }
    </>
  )

}

export default App
