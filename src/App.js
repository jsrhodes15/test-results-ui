import React, { Component } from 'react';

import { testResults } from './constants/testResults';
import Table from './table/Table';
import Navigation from './table/Navigation';

import './App.css';

const style = {
  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  float: 'left',
  border: '1px solid blue',
  padding: '8px',
};

const consumerSelectOptions = [
  { value: 'consumerEmailVerify', label: 'Consumer Email Verify' },
  { value: 'consumerBind', label: 'Consumer Bind' },
  { value: 'consumerPdfVerify', label: 'Consumer Pdf Verify' },
];

const Select = ({ label, value, id, onChange, options }) => {
  return (
    <div>
      <p>{label}</p>
      <select value={value} id={id} onChange={onChange}>
        <option value="Void">...</option>
        {options.map((o) => {
          return <option value={o.value}>{o.label}</option>;
        })}
      </select>
    </div>
  );
};

const AgencySelect = ({ onChange, value }) => {
  return (
    <div>
      <p>Test name</p>
      <select value={value} id="agencyTests" onChange={onChange}>
        <option value="Void">...</option>
        <option value="agency_retrieve">Agency Retrieve</option>
        <option value="agency_bind">Agency Bind</option>
        <option value="agency_underwriting">Agency Underwriting</option>
      </select>
    </div>
  );
};

const CSRSelect = ({ value, onChange }) => {
  return (
    <div>
      <p>Test name</p>
      <select value={value} id="csrTests" onChange={onChange}>
        <option value="Void">...</option>
        <option value="csrPdfVerify">CSR PDF Verify</option>
        <option value="csrBind">CSR Bind</option>
        <option value="csrPolicy">CSR Policy</option>
        <option value="csrEndorsements">CSR Endorsements</option>
      </select>
    </div>
  );
};

const ENVSelect = () => {
  return (
    <div>
      <p> Environment name</p>
      <select
        value={this.state.showEnv}
        id="env"
        onChange={this.envSearchHandler}
      >
        <option value="Void">...</option>
        <option value="staging">Staging</option>
        <option value="demo">Demo</option>
        <option value="prod">Production</option>
      </select>
    </div>
  );
};

class App extends Component {
  state = {
    showTable: false,
    showApp: 'Void',
    showTests: 'Void',
    showEnv: 'Void',
    testCount: 14,
    testResults: testResults,
  };

  searchHandler = (event) => {
    let val = event.target.value;
    this.setState({
      showApp: event.target.value,
      showTests: 'Void',
      showEnv: 'Void',
      showTable: false,
    });
  };

  testsSearchHandler = (event) => {
    let val = event.target.value;
    this.setState({
      showTests: event.target.value,
      showEnv: 'Void',
      showTable: false,
    });
  };

  envSearchHandler = (event) => {
    let val = event.target.value;
    this.setState({ showEnv: event.target.value, showTable: true });
  };

  render() {
    let content = [];

    if (
      this.state.showApp !== 'Void' &&
      this.state.showEnv !== 'Void ' &&
      this.state.showTests !== 'Void'
    ) {
      for (let i = 0; i < this.state.testResults.length; i++) {
        content.push(
          this.state.testResults[i].app[this.state.showApp][
            this.state.showTests
          ][this.state.showEnv]
        );
      }
    } else {
      content = ['Please make your choice!'];
    }

    let envSelect = this.state.showTests === 'Void' ? null : <ENVSelect />;

    let table = [];
    let nav = [];
    let sideBar = null;

    if (this.state.showTable !== false) {
      for (let i = 0; i < content.length; i++) {
        table.push(
          <Table
            content={content[i]}
            number={this.state.testResults[i].release}
          />
        );
      }
      for (let i = 1; i <= 14; i++) {
        nav.push(i);
      }
      sideBar = <Navigation count={nav} />;
    }

    return (
      <div className="App">
        <header>
          <h1>Test Results Page</h1>
          <h3> Please select the application, the test and the environment </h3>

          <p>Application name</p>
          <select id="application" onChange={this.searchHandler}>
            <option value="Void">...</option>
            <option value="agency">Agency</option>
            <option value="consumer">Consumer</option>
            <option value="csr">CSR</option>
          </select>

          {this.state.showApp === 'consumer' && (
            <Select
              label="Test Name"
              value={this.state.showTests}
              id="consumerTests"
              onChange={this.testsSearchHandler}
              options={consumerSelectOptions}
            />
          )}
          {this.state.showApp === 'agency' && (
            <Select
              value={this.state.showTests}
              onChange={this.testsSearchHandler}
            />
          )}
          {this.state.showApp === 'csr' && (
            <Select
              value={this.state.showTests}
              onChange={this.testsSearchHandler}
            />
          )}

          {envSelect}
          {sideBar}
          {table}
        </header>
      </div>
    );
  }
}

export default App;
