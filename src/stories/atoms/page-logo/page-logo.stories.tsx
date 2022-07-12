import React from "react";

import { ComponentStory } from "@storybook/react";

import PageLogo from "./page-logo";

export default {
  title: "Atoms/pageLogo",
  component: PageLogo
};

const Template: ComponentStory<typeof PageLogo> = () => <PageLogo />;

const pageLogo = Template.bind({});
pageLogo.args = {};
