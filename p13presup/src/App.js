import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/appContext";
const App = () => {
    return (
        <AppProvider>
            <div className="container">
                <h1 className="mt-3">Aplicación de presupuestos</h1>
                <div className="row mt-3">
                    <div className="col-sm">
                        <Budget />
                    </div>
                    <div className="col-sm">
                        <Remaining />
                    </div>
                    <div className="col-sm">
                        <ExpenseTotal />
                    </div>
                </div>
                <h3 className="mt-3">Facturas</h3>
                <div className="row mt-3">
                    <div className="col-sm">
                        <ExpensesList />
                    </div>
                </div>
                <h3 className="mt-3">Agregar Factura</h3>
                <div className="mt-3">
                    <div className="col-sm">
                        <AddExpenseForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
