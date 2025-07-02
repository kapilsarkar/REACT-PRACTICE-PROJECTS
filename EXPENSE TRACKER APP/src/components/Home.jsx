import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

const Home = () => {
  return (
    <div>
      <ExpenseSummary />
      <ExpenseList />
    </div>
  );
};

export default Home;
