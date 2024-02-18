import "./Styles/CardInner.scss";

const CardInner = (props) => {
  const classes = "card-inner " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default CardInner;
