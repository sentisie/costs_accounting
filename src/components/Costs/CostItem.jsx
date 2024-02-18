import "./Styles/CostItem.scss";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import CardInner from "../UI/CardInner";

const CostItem = (props) => {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <CardInner className="cost-item__price">${props.amount}</CardInner>
          <h2>{props.description}</h2>
        </div>
      </Card>
    </li>
  );
};

export default CostItem;
