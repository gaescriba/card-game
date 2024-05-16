import { useState } from 'react'

import makeDeck from './utils/makeDeck.js'

import Card from './components/Card.jsx'

function App() {

  const [localDeck, useLocalDeck] = useState(makeDeck());

  const [count, setCount] = useState(0)


  return (
    <div class="grid grid-cols-3 gap-5 items-center justify-center">
      <div class="relative bg-green-300">
        {
          localDeck.map(card => {
            const { suit, value } = card 
            return(
              <Card key = { localDeck.indexOf(card) } suitProp = { suit } valueProp = { value } />
            )
          })
        }
      </div>
      <div class="bg-red-400">
        Second deck
      </div>
      <div class="bg-blue-500">
        Third deck
      </div>
   </div>
  )
}

export default App
