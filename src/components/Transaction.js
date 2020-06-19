import React from "react";
import { formatToUSD } from "../helpers";

export const Transaction = ({ transaction }) => {
  return (
    <li>
      <time>{transaction.date}</time>
      <span>{transaction.description}</span>
      <span className={transaction.amount < 0 ? "debit" : "credit"}>
        {formatToUSD(transaction.amount)}
      </span>
    </li>
  )
}
