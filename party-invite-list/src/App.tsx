import { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 36,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "LeFlop never better than MJ.",
    },
  ]);

  const onClick = (p: IState["people"][0]): void => {
    const newPeople = people.filter((person) => {
      return person !== p;
    });
    setPeople(newPeople);
  };

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people} onClick={onClick}></List>
      <AddToList people={people} setPeople={setPeople}></AddToList>
    </div>
  );
}

export default App;
