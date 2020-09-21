import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  SignUpModal
} from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./components/utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "30px 16px 24px", padding: "8px", background: "none", cursor: "pointer", border: "none", boxShadow: "10px 10px 41px 0px", borderRadius: "50%"}}
        onClick={() => setUseDarkTheme(theme => !theme)}
      >
        {useDarkTheme? "☀️" : "🌙"}
      </button>

      {/* <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button> */}

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* <PrimaryButton
        // modifiers={["small", "warning"]}
        >
          Hello Boo Boo Baa Baa
        </PrimaryButton>
        <SecondaryButton
        // modifiers={["large", "warning", "secondaryButtonWarning"]}
        >
          Hello Boo Boo Baa Baa
        </SecondaryButton>
        <TertiaryButton>Hello Boo Boo Baa Baa</TertiaryButton> */}

      {/* <br />
      <PrimaryButton modifiers={["success"]}>Success</PrimaryButton>
      <SecondaryButton modifiers={["error"]}>Error</SecondaryButton>
      <br />
      
      <PrimaryButton disabled>disabled</PrimaryButton>
      <SecondaryButton disabled>disabled</SecondaryButton>
    <TertiaryButton disabled>disabled</TertiaryButton> */}
        <SignUpModal />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
