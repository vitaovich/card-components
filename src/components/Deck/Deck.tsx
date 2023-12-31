import React from "react";
import "./Deck.css";

export interface DeckProps {
  label: string;
}

const Deck = (props: DeckProps) => {
  return <div>{props.label}</div>;
};

export default Deck;