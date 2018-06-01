import { configure } from "@storybook/react";

const reqSrc = require.context("../src", true, /.stories.js$/);

function loadStories() {
  reqSrc.keys().forEach(filename => reqSrc(filename));
}

configure(loadStories, module);
