import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h2>History</h2>
      <ul id="transactions">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}
