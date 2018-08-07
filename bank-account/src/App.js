import React, { Component } from 'react';
import './App.css';
import BankApp from './BankApp';
import bankStore from "./bankStore";
import constants from "./constants";

class App extends Component {
  constructor(...args) {
    super(...args);
    bankStore.dispatch({ type: constants.CREATE_ACCOUNT })
    this.state = {
      balance: bankStore.getState().balance
    }
  }

  componentDidMount() {
    this.unsubscribe = bankStore.subscribe(() =>
      this.setState({ balance: bankStore.getState().balance })
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <BankApp
          balance={bankStore.getState().balance}
          onDeposit={(amount) => bankStore.dispatch(
            { type: constants.DEPOSIT_INTO_ACCOUNT, amount: amount })}
          onWithdraw={(amount) => bankStore.dispatch(
            { type: constants.WITHDRAW_FROM_ACCOUNT, amount: amount })}
        />
      </div>
    );
  }
}

export default App;
