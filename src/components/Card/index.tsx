import {FC, useCallback} from 'react'

import "./styles.css";
import { Props } from "./types";
import Button from '../Button';


const Card: FC<Props> = ({ title, extraInfo, isDetails = false }) => {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <div className="cardHeader">{title}</div>
        <div className="cardFooter">
        <div className="cardFooterContent">
          <div className="extraInfo">
            {extraInfo}
          </div>
          {!isDetails && <Button>Detalle</Button>}
          </div>
          </div>
      </div>
    </div>
  );
};

export default Card;
