import classes from "./tab-filter.module.scss";

function TabFilter() {
  return (
    <div className={classes["tab-filter__content"]}>
      <button
        className={[
          classes["tab-filter__button"],
          classes["tab-filter__button--left"],
          classes["tab-filter__button--active"],
        ].join(" ")}
        type="button"
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={classes["tab-filter__button"]} type="button">
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={[
          classes["tab-filter__button"],
          classes["tab-filter__button--right"],
        ].join(" ")}
        type="button"
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

export default TabFilter;
