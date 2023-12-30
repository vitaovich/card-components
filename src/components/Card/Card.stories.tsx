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
