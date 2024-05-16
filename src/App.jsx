import { useState } from 'react'

import makeDeck from './utils/makeDeck.js'

function App() {

  const [localDeck, useLocalDeck] = useState(makeDeck());

  const [count, setCount] = useState(0)


  return (
    <>
      Hello, cards!
   </>
  )
}

export default App
