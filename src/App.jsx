import { useState, useEffect } from 'react';

import makeDeck from './utils/makeDeck.js';

import useDeck from './hooks/useDeck.js';

import Card from './components/Card.jsx';

import { defaultCard } from './utils/constants.js';

const App = () => {

  const { passCard, dummy } = useDeck();

  const [localDeck, setLocalDeck] = useState(makeDeck());
  const [leftDeck, setLeftDeck] = useState(localDeck);
  const [middleDeck, setMiddleDeck] = useState([{suit: "X", value: '0'}]);
  const [rightDeck, setRightDeck] = useState([{suit: "X", value: '0'}]);
  const [change, setChange] = useState();

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
      left[1](decks.leftDeck)
      right[1](decks.rightDeck);
    }

    refreshDecks(left,right);

    setChange(!change);
  }

  const reset = () => {
    
    setChange(!change);
    setLeftDeck(localDeck);
    setMiddleDeck([defaultCard]);
    setRightDeck([defaultCard]);
    setChange(!change);
    
  }

  useEffect(()=> {
    setLeftDeck(leftDeck);
    setMiddleDeck(middleDeck);
    setRightDeck(rightDeck);
  },[change])

  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-center">
      <div className="bg-green-300" onClick={() => passLeftCard(0)}>
        <Card suitProp = { leftDeck[0].suit } valueProp = { leftDeck[0].value }/>
      </div>
      <div className="bg-red-400" onClick={() => passLeftCard(1)}>
        <Card suitProp = { middleDeck[0].suit  } valueProp = { middleDeck[0].value }/>
      </div>
      <div className="bg-blue-500"onClick={() => passLeftCard(2)}>
        <Card suitProp = { rightDeck[0] ? rightDeck[0].suit : 'X' } valueProp = { rightDeck[0] ? rightDeck[0].value : '0' }/>
      </div>
      <button onClick={reset}>
        Reset
      </button>
   </div>
  )

}

export default App
