import { parse } from "papaparse";

export const formatToUSD = (value) => new Intl.NumberFormat("en-us", {style: "currency", currency: "USD"}).format(value);

// Parse CSV and extract only relevant values. Adds an ID value to be used as unique key.
export const parseCSV = (csv) => {
  const parseConfig = {
    delimiter: ",",
    header: true
  };
  
  return parse(csv, parseConfig)
    .data
    .map(({ Date, Description, Debit, Credit }) => {
      let transactionAmount = Debit
        ? Debit
        : Credit;
  
      return {
        id: Math.floor(Math.random() * 100000000),
        date: Date, 
        description: Description, 
        amount: parseFloat(transactionAmount) * -1
      };
    });
};
