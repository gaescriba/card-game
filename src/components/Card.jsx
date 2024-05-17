import { useState, useEffect } from 'react';
import { ImHeart, ImSpades, ImDiamonds, ImClubs } from 'react-icons/im';

const Card = (props = {suit: 'X', value: '0'}) => {
  
  const[suitState, setSuitState] = useState(props.suitProp);
  const[valueState, setValueState] = useState(props.valueProp);

  useEffect(()=> {
    setSuitState(props.suitProp);
    props.valueProp == "0" ? setValueState("") : setValueState(props.valueProp);
  },[props.suitProp, props.valueProp]);

  return (
  
    <div className="flex basis-1/3 justify-center align-center relative min-h-full">
      <div className="absolute top-4 left-4 flex flex-col">
        { valueState }
        {
          suitState == "H" &&
          <ImHeart/>
        }
        {
          suitState == "S" &&
          <ImSpades/>
        }
        {
          suitState == "D" &&
          <ImDiamonds/>
        }
        {
          suitState == "C" &&
          <ImClubs/>
        }
      </div>
      <div className="place-self-center">
        {
          suitState == "H" &&
          <ImHeart/>
        }
        {
          suitState == "S" &&
          <ImSpades/>
        }
        {
          suitState == "D" &&
          <ImDiamonds/>
        }
        {
          suitState == "C" &&
          <ImClubs/>
        }

      </div>
      <div className="rotate-180 absolute bottom-4 right-4 flex flex-col">
        { valueState }
        {
          suitState == "H" &&
          <ImHeart/>
        }
        {
          suitState == "S" &&
          <ImSpades/>
        }
        {
          suitState == "D" &&
          <ImDiamonds/>
        }
        {
          suitState == "C" &&
          <ImClubs/>
        }
      </div>
    </div>

  )

};

export default Card;
