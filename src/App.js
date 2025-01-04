import React from "react";
import "./App.css";
import UrlShortener from "./components/UrlShortener";
import Analytics from "./components/Analytics";

function App() {
  return (
    <div className="App">
      <header>
        <p></p>
        <h1>URL Shortener</h1>
      </header>
      <main>
        <UrlShortener />
        <Analytics />
      </main>
    </div>
  );
}

export default App;
