import React from "react";
import ReactDOM from "react-dom";

import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./components/utils";

const App = () => (
  <>
    <PrimaryButton>Hello Boo Boo Baa Baa</PrimaryButton>
    <SecondaryButton>Hello Boo Boo Baa Baa</SecondaryButton>
    <TertiaryButton>Hello Boo Boo Baa Baa</TertiaryButton>

    <PrimaryButton disabled>disabled</PrimaryButton>
    <SecondaryButton disabled>disabled</SecondaryButton>
    <TertiaryButton disabled>disabled</TertiaryButton>
    <GlobalStyle />
  </>
);
ReactDOM.render(<App />, document.getElementById("root"));
