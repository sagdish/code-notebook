import React from "react";
import ReactDOM from "react-dom";

import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const App = () => (
  <>
    <PrimaryButton>Hello Boo Boo Baa Baa</PrimaryButton>
    <SecondaryButton>Hello Boo Boo Baa Baa</SecondaryButton>
    <TertiaryButton>Hello Boo Boo Baa Baa</TertiaryButton>
  </>
);
ReactDOM.render(<App />, document.getElementById("root"));
