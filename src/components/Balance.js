import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { formatToUSD } from "../helpers";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const balanceAmount = transactions.reduce((net, transaction) => net += transaction.amount, 0);

  return (
    <>
      <h2>Balance</h2>
      <em className="balance">
        {formatToUSD(balanceAmount)}
      </em>
      <p>Jump To Transaction History</p>
    </>
  )
}
