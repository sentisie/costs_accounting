import "./Styles/DiagramBar.scss";

const DiagramBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value * 100) / props.maxValue) + "%";
  }
  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div
          className="diagram-bar__fill"
          style={{
            height: barFillHeight,
          }}
        ></div>
      </div>
      <div className="diagram-bar__label">{props.label}</div>
    </div>
  );
};

export default DiagramBar;
