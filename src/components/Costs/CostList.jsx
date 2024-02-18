import CostItem from "./CostItem";
import "./Styles/CostList.scss";

const CostList = (props) => {
  if (props.costs.length === 0) {
    return <p>There are no costs this year</p>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
