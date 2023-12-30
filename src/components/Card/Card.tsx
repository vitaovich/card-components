import React from "react";
import "./Card.css";

export interface CardProps {
  /**
   * Card Value. ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
   */
  cardValue: string;
  /**
   * Card suit. Can be ace, spade, heart, or diamond. ['♠','☘','♦','♥']
   */
  cardSuit: string;
  /**
   * Is this card hidden on the screen?
   */
  isHidden: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Card = ({
  cardValue = 'A',
  cardSuit = '♠',
  isHidden = true,
  ...props
}: CardProps) => {
  const suits = ['♠', '☘', '♦', '♥']
  const defaultSuits = ['♠', '☘']
  const secondarySuits = ['♦', '♥']
  const color = secondarySuits.includes(cardSuit) ? 'secondary-color' : 'default-color'

  const cardValMapping: any = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13
  }

  const cardCenterLayout = (val: number) => {
    switch (val) {
      case 1:
        return <div className="card-suit-lg">{cardSuit}</div>
      case 2:
        return <>
          <div className="card-space-between flex-col"></div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col"></div>
        </>
      case 3:
        return <>
          <div className="card-space-between flex-col"></div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col"></div>
        </>
      case 4:
        return <>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
        </>
      case 5:
        return <>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
        </>
      case 6:
        return <>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col"></div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
        </>
      case 7:
        return <>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
        </>
      case 8:
        return <>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
        </>
      case 9:
        return <>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
        </>
      case 10:
        return <>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-col">
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
            <div className="card-suit-md">{cardSuit}</div>
          </div>
        </>
      case 11:
        return <div className="card-suit-lg">{cardValue}</div>
      case 12:
        return <div className="card-suit-lg">{cardValue}</div>
      case 13:
        return <div className="card-suit-lg">{cardValue}</div>
      default:
        return <div>Unknown Value</div>
    }
  }

  return (
    <>
      {isHidden &&
        <div className="card" {...props}>
          Back Placeholder
        </div>
      }
      {!isHidden &&
        <div className={`card ${color}`} {...props}>
          <div className="card-corner top-left">
            <div className="card-value">{cardValue}</div>
            <div className="card-suit">{cardSuit}</div>
          </div>
          <div className="card-space-between flex-grow-1 flex-row">
            {cardCenterLayout(cardValMapping[cardValue])}
          </div>
          <div className="card-corner bottom-right">
            <div className="card-value">{cardValue}</div>
            <div className="card-suit">{cardSuit}</div>
          </div>
        </div>

      }
    </>

  )
};

export default Card;