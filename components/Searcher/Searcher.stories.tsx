import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Searcher } from "./";

export default {
  title: "Example/Searcher",
  component: Searcher,
} as ComponentMeta<typeof Searcher>;

const Template: ComponentStory<typeof Searcher> = (args) => (
  <Searcher {...args} />
);

export const Unique = Template.bind({});
Unique.args = {
  placeholder: "Buscar",
};
