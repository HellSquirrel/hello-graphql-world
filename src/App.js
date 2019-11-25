import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "./App.css";
import gql from "graphql-tag";

const Items = gql`
  query {
    items
  }
`;

function App() {
  const { data, loading } = useQuery(Items);
  return (
    <div className="App">
      <header className="App-header">
        {loading ? "Loading..." : data.items.join("🐱")}
      </header>
    </div>
  );
}

export default App;
