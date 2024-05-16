import { ImHeart, ImSpades, ImDiamonds, ImClubs } from 'react-icons/im';

const Card = props => {

  return (
  
    <div class="absolute bg-stone-400 flex size-40 items justify-around">
      <div class="container_left">
        {
          props.suitProp == "H" &&
          <ImHeart/>
        }
        {
          props.suitProp == "S" &&
          <ImHeart/>
        }
        {
          props.suitProp == "D" &&
          <ImHeart/>
        }
        {
          props.suitProp == "C" &&
          <ImHeart/>
        }

        {props.valueProp}
      </div>
      <div class="container_center place-self-center">
        {
          props.suitProp == "H" &&
          <ImHeart/>
        }
        {
          props.suitProp == "S" &&
          <ImHeart/>
        }
        {
          props.suitProp == "D" &&
          <ImHeart/>
        }
        {
          props.suitProp == "C" &&
          <ImHeart/>
        }

      </div>
      <div class="container_right rotate-180">
        {
          props.suitProp == "H" &&
          <ImHeart/>
        }
        {
          props.suitProp == "S" &&
          <ImHeart/>
        }
        {
          props.suitProp == "D" &&
          <ImHeart/>
        }
        {
          props.suitProp == "C" &&
          <ImHeart/>
        }

        {props.valueProp}
      </div>
    </div>

  )

};

export default Card;
