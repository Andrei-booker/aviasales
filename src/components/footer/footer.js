import classes from "./footer.module.scss";

function ShowMore() {
  return (
    <button className={classes.button} type="button">
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}

export default ShowMore;
