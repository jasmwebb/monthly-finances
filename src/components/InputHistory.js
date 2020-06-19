import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { parseCSV } from "../helpers";

export const InputHistory = () => {
  const [transactions, setHistory] = useState("");
  const { inputHistory } = useContext(GlobalContext);

  const onSubmit = event => {
    event.preventDefault();

    const newHistory = parseCSV(transactions);
    inputHistory(newHistory);
  };

  return (
    <>
      <h3>Input History</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="csv-paste">Paste comma-separated values (CSV) into this box, including headers.</label>
        <textarea 
          id="csv-paste"
          rows="10"
          value={transactions}
          onChange={(e) => setHistory(e.target.value)}>
          Placeholder example here
        </textarea>
        <button>Calculate!</button>
      </form>
    </>
  )
}