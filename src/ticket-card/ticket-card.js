import classes from "./ticket-card.module.scss";
import Logo from "../img/S7 Logo.svg";

function TicketCard() {
  return (
    <div className={classes["ticket-card"]}>
      <div className={classes["ticket-card__header"]}>
        <span className={classes["ticket-card__price"]}>13 400 P</span>
        <img alt="S7 Logo" src={Logo} />
      </div>
      <div className={classes["ticket-card__flight-info"]}>
        <div className={classes["flight-info__block"]}>
          <span className={classes["flight-info__title"]}>MOW – HKT</span>
          <span className={classes["flight-info__text"]}>10:45 – 08:00</span>
        </div>
        <div className={classes["flight-info__block"]}>
          <span className={classes["flight-info__title"]}>В ПУТИ</span>
          <span className={classes["flight-info__text"]}>21ч 15м</span>
        </div>
        <div className={classes["flight-info__block"]}>
          <span className={classes["flight-info__title"]}>2 ПЕРЕСАДКИ</span>
          <span className={classes["flight-info__text"]}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes["ticket-card__flight-info"]}>
        <div className={classes["flight-info__block"]}>
          <span className={classes["flight-info__title"]}>MOW – HKT</span>
          <span className={classes["flight-info__text"]}>11:20 – 00:50</span>
        </div>
        <div className={classes["flight-info__block"]}>
          <span className={classes["flight-info__title"]}>В ПУТИ</span>
          <span className={classes["flight-info__text"]}>13ч 30м</span>
        </div>
        <div className={classes["flight-info__block"]}>
          <span className={classes["flight-info__title"]}>1 ПЕРЕСАДКА</span>
          <span className={classes["flight-info__text"]}>HKG</span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
