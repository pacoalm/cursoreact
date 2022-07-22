import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

function ExpenseTotal() {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.importe);
    }, 0);

    return (
        <div className="alert alert-primary">
            <span>Pagado: {totalExpenses}€</span>
        </div>
    );
}

export default ExpenseTotal;
