import React, { Component } from 'react';
import Select from './components/Select';

import { testResults } from './constants/testResults';
import Table from './components/table/Table';
import Navigation from './components/table/Navigation';
import { consumerSelectOptions, csrSelectOptions, agencySelectOptions, applicationSelectOptions, envSelectOptions } from './constants/selectOptions';

import './App.css';


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
    val != "Void" ? this.setState({ showEnv: event.target.value, showTable: true }) : this.setState({ showEnv: event.target.value, showTable: false })
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
      for (let i = 1; i <= this.state.testCount; i++) {
        nav.push(i);
      }
      sideBar = <Navigation count={nav} />;
    }

    return (
      <div className="App">
        <header>
          <h1>Test Results Page</h1>
          <h3> Please select the application, the test and the environment </h3>

          <Select
            label="Application name"
            id="consumerTests"
            onChange={this.searchHandler}
            options={applicationSelectOptions}
          />

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
              label="Test Name"
              value={this.state.showTests}
              onChange={this.testsSearchHandler}
              options={agencySelectOptions}
            />
          )}
          {this.state.showApp === 'csr' && (
            <Select
              label="Test Name"
              value={this.state.showTests}
              onChange={this.testsSearchHandler}
              options={csrSelectOptions}
            />
          )}


          {this.state.showTests != 'Void' && (
            <Select
              label="Envoronment Name"
              value={this.state.showEnv}
              id="env"
              onChange={this.envSearchHandler}
              options={envSelectOptions}
            />
          )}



          {sideBar}
          {table}
        </header>
      </div>
    );
  }
}

export default App;
