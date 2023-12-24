import classes from "./app.module.scss";
import Header from "../header/header";
import TransferFilter from "../transfer-filter/transfer-filter";
import TabFilter from "../tab-filter/tab-filter";
import TicketCard from "../ticket-card/ticket-card";
import ShowMore from "../footer/footer";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes["main-content"]}>
        <div className={classes["transfer-filter"]}>
          <TransferFilter />
        </div>
        <div className={classes["central-content"]}>
          <TabFilter />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <ShowMore />
        </div>
      </div>
    </div>
  );
}

export default App;
