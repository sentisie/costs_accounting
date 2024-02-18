import "./Styles/CostFilter.scss";

const CostFilter = (props) => {
  const yearChangeHandler = (event) => {
    const yearData = event.target.value;
    props.onChangeSelect(yearData);
  };

  return (
    <div>
      <form className="filter-form">
        <label>Selection by year</label>
        <select value={props.year} onChange={yearChangeHandler} name="years">
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </form>
    </div>
  );
};

export default CostFilter;
