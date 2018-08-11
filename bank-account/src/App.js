import React, { Component } from 'react';
import { Provider, connect } from "react-redux";
import './App.css';
import BankApp from './BankApp';
import bankStore from "./bankStore";
import bankActionCreators from "./bankActionCreators";

const mapStateToProps = (state) => {
  return {
    balance: state.balance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
    onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount))
  }
}

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp);

class App extends Component {
  render() {
    return (
      <Provider store={bankStore}>
        <BankAppContainer/>
      </Provider>
      /*
      <div className="App">
        <BankApp
          balance={bankStore.getState().balance}
          onDeposit={(amount) => bankStore.dispatch(
            bankActionCreators.depositIntoAccount(amount))}
          onWithdraw={(amount) => bankStore.dispatch(
            bankActionCreators.withdrawFromAccount(amount))}
        />
      </div>
      */
    );
  }
}

export default App;
