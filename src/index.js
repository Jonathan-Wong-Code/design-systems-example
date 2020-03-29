import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  StatusButton,
  SignUpModal
} from "./components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(true);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(s => !s)}
      >
        Toggle Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(s => !s)}
      >
        Toggle Modal
      </button>
      <GlobalStyle />
      <div
        style={{
          background: !useDarkTheme
            ? darkTheme.primaryColor
            : defaultTheme.primaryColor,
          width: "100vw",
          height: "100h",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />

        <PrimaryButton>Hello World</PrimaryButton>
        <SecondaryButton>Hello World</SecondaryButton>
        <TertiaryButton>Hello World</TertiaryButton>
        <StatusButton modifiers="warning">Warning</StatusButton>
      </div>
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
