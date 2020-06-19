import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { EarnedSpent } from "./components/EarnedSpent";
import { TransactionHistory } from "./components/TransactionHistory";
import { InputHistory } from  "./components/InputHistory";
import { GlobalProvider } from "./context/GlobalState";
import "./App.min.css";

function App() {
  return (
    <main>
      <GlobalProvider>
        <Header />

        <div className="container">
          <Balance />
          <EarnedSpent />
          <TransactionHistory />
          <InputHistory />
        </div>
      </GlobalProvider>
    </main>
  );
}

export default App;
