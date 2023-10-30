import { useLoaderData } from "react-router-dom";
import "./App.css";
import Card from "./Card";
import { useState } from "react";

function App() {
  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees);
  return (
    <div className="m-2">
      <h1 className="text-6xl text-purple-600">Coffees {coffees.length}</h1>
      <div className="grid md:grid-cols-2 gap-2 ">
        {coffees.map((coffee) => (
          <Card
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
