import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GetItems } from "./operations.graphql";
import "./App.css";

function App() {
  const { data, loading } = useQuery(GetItems);
  return (
    <div className="App">
      <header className="App-header">
        {loading ? "Loading..." : data.items.join("🐱")}
      </header>
    </div>
  );
}

export default App;
