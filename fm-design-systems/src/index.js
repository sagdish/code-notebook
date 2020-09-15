import React from "react";
import ReactDOM from "react-dom";

import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const App = () => (
  <div>
    <PrimaryButton>Hello Boo Boo Baa Baa</PrimaryButton>
    <SecondaryButton>Hello Boo Boo Baa Baa</SecondaryButton>
    <TertiaryButton>Hello Boo Boo Baa Baa</TertiaryButton>
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
