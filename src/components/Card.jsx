import { useState, useEffect } from 'react';
import { ImHeart, ImSpades, ImDiamonds, ImClubs } from 'react-icons/im';

const Card = (props = {suit: 'X', value: '0'}) => {
  
  const[suitState, setSuitState] = useState(props.suitProp);
  const[valueState, setValueState] = useState(props.valueProp);

  useEffect(()=> {
    setSuitState(props.suitProp);
    setValueState(props.valueProp);
  },[props.suitProp, props.valueProp]);

  return (
  
    <div className="bg-stone-400">
      <div className="container_left">
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

        { valueState }
      </div>
      <div className="container_center place-self-center">
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
      <div className="container_right rotate-180">
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

        { valueState }
      </div>
    </div>

  )

};

export default Card;
