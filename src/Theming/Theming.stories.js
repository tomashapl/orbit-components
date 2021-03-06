// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import defaultTheme from "orbit-design-token";

import ThemedSample, { RawComponent } from "../Theming/ThemedSample";
import ThemeSwither from "./ThemeSwitcher";
import ThemeProvider from "./ThemeProvider";

const altTheme = {
  colorTextPrimary: "green",
};

const otherTheme = {
  colorTextPrimary: "purple",
  fontFamily: "Times, serif",
};

const altFullTheme = Object.assign({}, defaultTheme, {
  colorTextPrimary: "red",
  fontFamily: "Courier",
});

storiesOf("Theming", module)
  .add("Without Theme using default props", () => <RawComponent />)
  .add("Without Theme with props", () => <RawComponent theme={altFullTheme} />)
  .add("Default Theme", () => (
    <ThemeProvider>
      <ThemedSample />
    </ThemeProvider>
  ))
  .add("Alt theme", () => (
    <ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={altTheme}>
        <ThemedSample />
      </ThemeProvider>
    </ThemeProvider>
  ))
  .add("Theme switcher", () => (
    <ThemeSwither themes={[altTheme, otherTheme]}>
      <ThemedSample />
    </ThemeSwither>
  ));
