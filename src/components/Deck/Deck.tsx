import React from "react";
import "./Deck.css";
import Card from "../Card";
import CardInfo, { Rank, Suit } from "../../models/CardInfo";

const suits: Suit[] = ['♠', '♦', '☘', '♥'];
const ranks: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const CreateDeck = () => {
  let deck: CardInfo[] = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push(new CardInfo(suit, rank))
    }
  }

  return deck;
}

export interface DeckProps {
  /**
   * Cards in deck
   */
  cards: CardInfo[]
  /**
   * Is this deck stacked?
   */
  isStacked: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Deck = ({
  cards = CreateDeck(),
  isStacked = true,
  ...props
}: DeckProps) => {

  const stackedClass = isStacked ? 'card-stack' : ''
  const deckOfCards = cards.map((card, idx) => {
    if (isStacked) {
      return <div key={idx} className={`${stackedClass}`} style={{ transform: `translateX(${idx * 2}px)` }}>
        <Card cardValue={card.rank} cardSuit={card.suit} isHidden={false} isValid={true} />
      </div>
    }
    return <Card key={idx} cardValue={card.rank} cardSuit={card.suit} isHidden={false} isValid={true} />
  }
  )

  return (
    <>
      <div className={`deck-spread`} {...props}>
        <Card isHidden={true} cardValue={""} cardSuit={""} isValid={false} />
        {deckOfCards}
      </div>
    </>
  )
};

export default Deck;