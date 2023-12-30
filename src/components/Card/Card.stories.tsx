import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} as Meta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const AceDiamond = Template.bind({});
AceDiamond.args = {
  cardSuit:'♦',
  cardValue:'A'
};

export const AceClover = Template.bind({});
AceClover.args = {
  cardSuit:'☘',
  cardValue:'A'
};

export const AceHeart = Template.bind({});
AceHeart.args = {
  cardSuit:'♥',
  cardValue:'A'
};

export const AceSpade = Template.bind({});
AceSpade.args = {
  cardSuit:'♠',
  cardValue:'A'
};

export const TwoOfHearts = Template.bind({});
TwoOfHearts.args = {
  cardSuit:'♥',
  cardValue:'2'
};

export const ThreeOfHearts = Template.bind({});
ThreeOfHearts.args = {
  cardSuit:'♥',
  cardValue:'3'
};

export const FourOfHearts = Template.bind({});
FourOfHearts.args = {
  cardSuit:'♥',
  cardValue:'4'
};

export const FiveOfHearts = Template.bind({});
FiveOfHearts.args = {
  cardSuit:'♥',
  cardValue:'5'
};

export const SixOfHearts = Template.bind({});
SixOfHearts.args = {
  cardSuit:'♥',
  cardValue:'6'
};

export const SevenOfHearts = Template.bind({});
SevenOfHearts.args = {
  cardSuit:'♥',
  cardValue:'7'
};

export const EightOfHearts = Template.bind({});
EightOfHearts.args = {
  cardSuit:'♥',
  cardValue:'8'
};

export const NineOfHearts = Template.bind({});
NineOfHearts.args = {
  cardSuit:'♥',
  cardValue:'9'
};

export const TenOfHearts = Template.bind({});
TenOfHearts.args = {
  cardSuit:'♥',
  cardValue:'10'
};