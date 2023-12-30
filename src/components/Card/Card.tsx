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
}

const Card = ({
  cardValue='A',
  cardSuit='♠',
  ...props
}: CardProps) => {
  const suits = ['♠','☘','♦','♥']
  const defaultSuits = ['♠','☘']
  const secondarySuits = ['♦','♥']
  const color = secondarySuits.includes(cardSuit) ? 'secondary-color' : 'default-color'

  return (
    <div className={`card ${color}`}>
      <div className="card-corner top-left">
        <div className="card-value">{cardValue}</div>
        <div className="card-suit">{cardSuit}</div>
      </div>
      <div className="card-center">
        <div className="card-suit-single">{cardSuit}</div>
      </div>
      <div className="card-corner bottom-right">
        <div className="card-value">{cardValue}</div>
        <div className="card-suit">{cardSuit}</div>
      </div>
    </div>
  )
};

export default Card;