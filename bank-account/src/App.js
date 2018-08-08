import React, { Component } from 'react';
import './App.css';
import BankApp from './BankApp';
import bankStore from "./bankStore";
import constants from "./constants";
import bankActionCreators from "./bankActionCreators";

class App extends Component {

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
            bankActionCreators.depositIntoAccount(amount))}
          onWithdraw={(amount) => bankStore.dispatch(
            bankActionCreators.withdrawFromAccount(amount))}
        />
      </div>
    );
  }
}

export default App;
