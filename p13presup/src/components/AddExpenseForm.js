import React, { useContext, useState } from "react";
import { AppContext } from "../context/appContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = (props) => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState("");
    const [importe, setImporte] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name,
            importe: parseInt(importe),
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });

        setName("");
        setImporte("");
    };

    return (
        <form onSubmit={onSubmit}>
            <div class="row">
                <div class="col-sm col-lg-4">
                    <label for="name">Concepto</label>
                    <input
                        required="required"
                        type="text"
                        class="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div class="col-sm col-lg-4">
                    <label for="cost">Importe</label>
                    <input
                        required="required"
                        type="number"
                        class="form-control"
                        id="cost"
                        value={importe}
                        onChange={(event) => setImporte(event.target.value)}
                    />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm">
                    <button type="submit" class="btn btn-primary">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
