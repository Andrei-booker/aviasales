import classes from "./transfer-filter.module.scss";

function TransferFilter() {
  return (
    <div className={classes["filters-list"]}>
      <h5 className={classes["filters-list__title"]}>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <label htmlFor="All" className={classes["filters-list__item"]}>
        <input
          id="All"
          type="checkbox"
          className={classes["filters-list__checkbox"]}
        />
        <span className={classes["filters-list__span"]}>Все</span>
      </label>
      <label
        htmlFor="Without transfer"
        className={classes["filters-list__item"]}
      >
        <input
          id="Without transfer"
          type="checkbox"
          className={classes["filters-list__checkbox"]}
        />
        <span className={classes["filters-list__span"]}>Без пересадок</span>
      </label>
      <label htmlFor="1 transfer" className={classes["filters-list__item"]}>
        <input
          id="1 transfer"
          type="checkbox"
          className={classes["filters-list__checkbox"]}
        />
        <span className={classes["filters-list__span"]}>1 пересадка</span>
      </label>
      <label htmlFor="2 transfers" className={classes["filters-list__item"]}>
        <input
          id="2 transfers"
          type="checkbox"
          className={classes["filters-list__checkbox"]}
        />
        <span className={classes["filters-list__span"]}>2 пересадки</span>
      </label>
      <label htmlFor="3 transfers" className={classes["filters-list__item"]}>
        <input
          id="3 transfers"
          type="checkbox"
          className={classes["filters-list__checkbox"]}
        />
        <span className={classes["filters-list__span"]}>3 пересадки</span>
      </label>
    </div>
  );
}
export default TransferFilter;
