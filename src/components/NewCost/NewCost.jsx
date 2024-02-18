import "./Styles/NewCost.scss";
import CostForm from "./CostForm";
import Card from "../UI/Card";
import React, { useState } from "react";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(36).substring(7),
    };
    props.onAddCost(costData);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <Card className="new-cost">
      {!isFormVisible && (
        <div>
          <button onClick={inputCostDataHandler}>Add new cost</button>
        </div>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </Card>
  );
};

export default NewCost;
