import "./Styles/CostDate.scss";
import CardInner from "../UI/CardInner";

const CostDate = (props) => {
  const month = props.date.toLocaleString("ru-RU", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });
  return (
    <div>
      <CardInner className="cost-date">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </CardInner>
    </div>
  );
};

export default CostDate;
