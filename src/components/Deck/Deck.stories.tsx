import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Deck from "./Deck";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CardComponents/Deck",
  component: Deck,
} as Meta<typeof Deck>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Deck> = (args) => <Deck {...args} />;

export const StandardDeck = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StandardDeck.args = {
};
