    import React, { Component } from 'react';


    import './App.css';
    import Table from './table/Table'
    import Navigation from './table/Navigation'

    class App extends Component {


      state = {


        showTable: false,


        showApp: "Void",
        showTests: "Void",
        showEnv: "Void",
        testCount: 14,




        testResults: [ { release: "001", name: "", date: "", app:

                                          {  agency: {
                                                        agency_bind: {
                                                                    prod:  [{res: "second",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                    demo:  [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                    staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                          },
                                                          agency_underwriting: {
                                                                  prod: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                  demo: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                  staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                          },

                                                          agency_retrieve: {

                                                            prod: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                            demo: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                            staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                          }


                                                      },

                                                      consumer: {
                                                                    consumerPdfVerify: {
                                                                                prod:  [{res: "second",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                                demo:  [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                                staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                                      },
                                                                      consumerBind: {
                                                                              prod: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                              demo: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                              staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                                      },

                                                                      consumerEmailVerify: {

                                                                        prod: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                        demo: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                        staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                                      }


                                                                  },
                                                      csr: {
                                                                    csrPdfVerify: {
                                                                                prod:  [{res: "second",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                                demo:  [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                                staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                                      },
                                                                      csrBind: {
                                                                              prod: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                              demo: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                              staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                                      },

                                                                      csrPolicy: {

                                                                        prod: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                        demo: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                        staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                                      },

                                                                      csrEndorsements: {

                                                                        prod: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                        demo: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}],
                                                                        staging: [{res: "Passed",link: ""}, {res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""},{res: "Passed",link: ""}]

                                                                      }


                                                                  }




                                                    }




                          }


                        ]

                      }


        searchHandler = ( event ) => {

          let val = event.target.value
          this.setState( { showApp : event.target.value , showTests: "Void", showEnv: "Void", showTable: false} )
        }

        testsSearchHandler = ( event ) => {

          let val = event.target.value
          this.setState( { showTests : event.target.value, showEnv: "Void", showTable: false } )
        }

        envSearchHandler = ( event ) => {

          let val = event.target.value
          this.setState( { showEnv : event.target.value, showTable: true } )
        }


        render() {

          const style = {
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          float: 'left',
          border: '1px solid blue',
          padding: '8px'

        };



          let content = [];

          if (this.state.showApp !== "Void" &&  this.state.showEnv !== "Void " && this.state.showTests !=="Void") {
              for ( let i = 0 ; i < this.state.testResults.length; i ++ ) {
                content.push ( this.state.testResults[i].app[this.state.showApp][this.state.showTests][this.state.showEnv])
              }
          } else {content = ["Please make your choice!"] }

          let testSelect =  this.state.showApp === "consumer" ? (
            <div>
            <p>Test name</p>
            <select value = {this.state.showTests } id = "consumerTests" onChange ={ this.testsSearchHandler}>
              <option value  = "Void">...</option>
              <option value = "consumerEmailVerify">Consumer Email Verify</option>
              <option value = "consumerBind">Consumer Bind</option>
              <option  value = "consumerPdfVerify">Consumer Pdf Verify</option>

            </select>
            </div>


          ) : this.state.showApp === "agency"  ?  (

            <div>
            <p>Test name</p>
            <select value = { this.state.showTests } id  = "agencyTests" onChange ={ this.testsSearchHandler} >
              <option value  = "Void">...</option>
              <option value = "agency_retrieve">Agency Retrieve</option>
              <option value = "agency_bind">Agency Bind</option>
              <option  value = "agency_underwriting">Agency Underwriting</option>

            </select>
            </div>


          ) :  this.state.showApp === "csr" ? (
            <div>
            <p>Test name</p>
            <select  value = {this.state.showTests } id = "csrTests" onChange ={ this.testsSearchHandler}>
              <option value  = "Void">...</option>
              <option value = "csrPdfVerify">CSR PDF Verify</option>
              <option value = "csrBind">CSR Bind</option>
              <option  value = "csrPolicy">CSR Policy</option>
              <option value = "csrEndorsements">CSR Endorsements</option>

            </select>
            </div>


          ) : null


          let envSelect =  this.state.showTests === "Void" ? null : (<div> <p> Environment name</p><select value =  {this.state.showEnv }  id = "env" onChange = {this.envSearchHandler}>
            <option value = "Void">...</option>
            <option value = "staging">Staging</option>
            <option  value = "demo">Demo</option>
            <option value = "prod">Production</option>

          </select>
          </div>
)

          let table = [];








        let nav = [];
        let sideBar = null;


          if ( this.state.showTable !== false  ) {

               for (let i =0; i < content.length; i++) {
                 table.push(<Table
                 content = {content[i]}
                 number = {this.state.testResults[i].release}
                 />)


                }


              for ( let i = 1; i <= 14; i++) {

                  nav.push (i
                  )

              }

               sideBar = (
                <Navigation
                count = {nav}/>
              )


          }




        return (
          <div className="App">
            <header >
              <h1>Test Results Page</h1>
              <h3> Please select the application, the test and the environment </h3>





              <p>Application name</p>
              <select id = "application" onChange = {this.searchHandler}>

              <option value = "Void">...</option>
                <option  value = "agency">Agency</option>
                <option value = "consumer">Consumer</option>
                <option value = "csr">CSR</option>
              </select>


              {testSelect}
              {envSelect}
              {sideBar}
              {table}



             </header>
          </div>
        );
        }
      }

      export default App;
