const useDeck = () => {

  const passCard = (leftDeck, rightDeck) => {
    const passingCard = leftDeck.shift();
    rightDeck.unshift(passingCard);

    return { leftDeck, rightDeck };
  };

  const dummy = () => {

    console.log("dummy");

  };

  return { passCard, dummy };

};

export default useDeck;
