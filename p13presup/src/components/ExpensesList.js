import Reac, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/appContext";

function ExpensesList() {
    const { expenses } = useContext(AppContext);

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem
                    id={expense.id}
                    name={expense.name}
                    importe={expense.importe}
                />
            ))}
        </ul>
    );
}

export default ExpensesList;
