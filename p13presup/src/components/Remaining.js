import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

function Remaining() {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.importe);
    }, 0);

    const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
    return (
        <div className={`alert  ${alertType}`}>
            <span>Pendiente: {budget - totalExpenses}€</span>
        </div>
    );
}

export default Remaining;
