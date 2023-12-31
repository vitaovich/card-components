import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Deck from "./Deck";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CardComponents/Deck",
  component: Deck,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} as Meta<typeof Deck>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Deck> = (args) => <Deck {...args} />;

export const StandardDeckStacked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StandardDeckStacked.args = {
  isStacked: true
};

export const StandardDeckUnstacked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StandardDeckUnstacked.args = {
  isStacked: false
};

export const EmptyDeckStacked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyDeckStacked.args = {
  cards: [],
  isStacked: true
};

export const EmptyDeckUnstacked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyDeckUnstacked.args = {
  cards: [],
  isStacked: false
};
