import './ExpenseItems.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 9, 22);
  const expenseTitle = 'Car Insurance';
  const expenseAmmount = 249.99;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
