import React from "react";
import "./Deck.css";
import Card from "../Card";

type Suit = '♠' | '☘' | '♦' | '♥';
type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

class CardInfo {
  suit: Suit;
  rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }

  display(): string {
    return `${this.rank} of ${this.suit}`;
  }
}

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
}

const Deck = ({
  cards = CreateDeck(),
  isStacked = true,
  ...props
}) => {

  const stackedClass = isStacked ? 'card-stack' : ''
  const deckOfCards = cards.map((card, idx) =>
    <>
      {isStacked &&
        <div className={`${stackedClass}`} style={{ transform: `translateX(${idx * 2}px)` }}>
          <Card key={card.rank + card.suit} cardValue={card.rank} cardSuit={card.suit} isHidden={false} isValid={true} />
        </div>
      }
      {!isStacked &&
        <Card key={card.rank + card.suit} cardValue={card.rank} cardSuit={card.suit} isHidden={false} isValid={true} />
      }
    </>
  )

  return (
    <>
      <div className={`deck-spread`}>
        <Card isHidden={true} cardValue={""} cardSuit={""} isValid={false} />
        {cards.length > 0 &&
          <>
            {deckOfCards}
          </>
        }
      </div>
    </>
  )
};

export default Deck;