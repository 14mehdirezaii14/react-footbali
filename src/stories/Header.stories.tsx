import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "../components/Header/Header";
import Theme from "../components/Header/Theme";
import SearchBoxHeader from "../components/Header/SearchBoxHeader";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../Redux/store";
import "../styles/index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    actions: {
      handles: ['change', 'click .btn'],
    },
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const StoryHeader: ComponentStory<typeof Header> = (args) => (
  <Provider store={store}>
    <ThemeProvider attribute="class">
      <Header />
    </ThemeProvider>
  </Provider>
);

export const ThemeStories = () => (
  <ThemeProvider attribute="class">
    <Theme />
  </ThemeProvider>
);

export const SearchBoxStories = () =>  (
    <SearchBoxHeader/>
  )


