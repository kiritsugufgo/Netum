import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    firstName: string,
    lastName: string
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);

  return <div className="App">
    <AddToList people={people} setPeople={setPeople}/>
    <List people={people} setPeople={setPeople}/>
  </div>
}

export default App;
