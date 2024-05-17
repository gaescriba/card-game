import { useState, useEffect } from 'react';

import makeDeck from './utils/makeDeck.js';

import useDeck from './hooks/useDeck.js';

import Card from './components/Card.jsx';

import { defaultCard } from './utils/constants.js';

const App = () => {

  const { passCard, shuffleDeck, minigame, checkWin, dummy } = useDeck();

  const [leftDeck, setLeftDeck] = useState(makeDeck());
  const [middleDeck, setMiddleDeck] = useState([defaultCard]);
  const [rightDeck, setRightDeck] = useState([defaultCard]);
  const [minigameTarget, setMinigameTarget] = useState(0);
  const [minigameStarted, setMinigameStarted] = useState(false);
  const [minigameWon, setMinigameWon] = useState(false);
  const [change, setChange] = useState();

  const refreshAndClear = () => {
    const shuffledDeck = shuffleDeck(makeDeck());
    setLeftDeck(shuffledDeck);
    setMiddleDeck([defaultCard]);
    setRightDeck([defaultCard]);
  };

  const passLeftCard = option => {
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
    
    

    setChange(!change);
    if(minigameStarted){

      setMinigameWon(checkWin(leftDeck[0], middleDeck[0], rightDeck[0], minigameTarget));

    };
  }

  const handleMinigame = () => {

    setChange(!change);
    
    refreshAndClear();

    const target = minigame();
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

  useEffect(()=> {

    if(minigameWon){

      refreshAndClear();

    };

  },[minigameWon]);

  return (
    <div className="flex flex-col align-center justify-around h-screen" >
      <div className="flex flex-row justify-around">
        <div className="min-w-80 min-h-96 rounded-2xl border-2 border-black" onClick={() => passLeftCard(0)}>
          <Card suitProp = { leftDeck[0].suit } valueProp = { leftDeck[0].value }/>
        </div>
        <div className="min-w-80 min-h-96 rounded-2xl border-2 border-black" onClick={() => passLeftCard(1)}>
          <Card suitProp = { middleDeck[0].suit  } valueProp = { middleDeck[0].value }/>
        </div>
        <div className="min-w-80 min-h-96 rounded-2xl border-2 border-black"onClick={() => passLeftCard(2)}>
          <Card suitProp = { rightDeck[0] ? rightDeck[0].suit : 'X' } valueProp = { rightDeck[0] ? rightDeck[0].value : '0' }/>
        </div>
      </div>
      <button onClick={handleMinigame} className="border-2 rounded-xl border-black w-20 place-self-center">
        Reset
      </button>
      <br/>
      {
        minigameStarted &&
        <div className="text-center">
          El valor es: {minigameTarget}
        </div>
      }
    </div>
  )

}

export default App
