import React from "react";
import { Form } from "../src/components";
import { Repos } from "./components";
import { RepoContextProvider } from "./context/RepoContext";

function App() {
  return (
    <RepoContextProvider>
      <div id="app">
        <Form />
        
        <Repos />
      </div>
    </RepoContextProvider>
  );
}

export default App;
