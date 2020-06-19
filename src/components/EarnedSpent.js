import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { formatToUSD } from "../helpers";

export const EarnedSpent = () => {
  const { transactions } = useContext(GlobalContext);
  const earnedTotal = formatToUSD(
    transactions
      .filter(transaction => transaction.amount > 0)
      .reduce((total, transaction) => total += transaction.amount, 0)
  );
  const spentTotal = formatToUSD(
    Math.abs(
      transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((total, transaction) => total += transaction.amount, 0)
    )
  );

  return (
    <div className="earned-spent-container">
      <div>
        <h3>Earned</h3>
        <em className="money credit">{earnedTotal}</em>
      </div>

      <div>
        <h3>Spent</h3>
        <em className="money debit">{spentTotal}</em>
      </div>
    </div>
  )
}