import ExpenseItems from './components/ExpenseItems';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
    },
    { id: 'e2', title: 'New TV', amount: 799.49, },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems title={expenses[0].title}
        amount={expenses[0].amount}>
        
      </ExpenseItems>
      <ExpenseItems title={expenses[1].title}
        amount={expenses[1].amount}>
        
      </ExpenseItems>
      <ExpenseItems title={expenses[2].title}
        amount={expenses[2].amount}>
        
      </ExpenseItems>
      <ExpenseItems title={expenses[3].title}
        amount={expenses[3].amount}>
        
      </ExpenseItems>
    </div>
  );
}

export default App;
