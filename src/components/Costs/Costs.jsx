import "./Styles/Costs.scss";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const selectChangeHandler = (selectData) => {
    setSelectedYear(selectData);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeSelect={selectChangeHandler} />
        <CostDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
