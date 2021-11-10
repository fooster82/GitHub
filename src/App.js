import React from "react";
import { Repos } from "./components";
import { RepoContextProvider } from "./context/RepoContext";
import { Header } from './layout/Header'; 

function App() {
  return (
    <RepoContextProvider>
      <div id="app">
        <Header />
        
        <Repos />
      </div>
    </RepoContextProvider>
  );
}

export default App;
