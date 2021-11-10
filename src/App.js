import React from "react";
import { Repos } from "./components";
import { RepoContextProvider } from "./context/RepoContext";
import { Header } from './layout/Header'; 
import { Footer } from './layout/Footer';

function App() {
  return (
    <RepoContextProvider>
      <div id="app">
        <Header />
        
        <Repos />

        <Footer />
      </div>
    </RepoContextProvider>
  );
}

export default App;
