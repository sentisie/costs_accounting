import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date("2021-2-21"),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date("2021-6-16"),
    description: "MacBook",
    amount: 1899.99,
  },
  {
    id: "c3",
    date: new Date("2021-12-11"),
    description: "Кровать",
    amount: 55.22,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (newCost) => {
    setCosts((prevCosts) => {
      return [newCost, ...prevCosts];
    });
  };

  return (
    <section>
      <div className="container">
        <div>
          <h1 className="main-title">Costs accounting</h1>
          <NewCost onAddCost={addCostHandler} />
          <Costs costs={costs} />
        </div>
      </div>
    </section>
  );
};

export default App;
