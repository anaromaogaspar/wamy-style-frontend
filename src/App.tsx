import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
