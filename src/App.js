import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Results Page</h1>
        <table>
          <tr>
            <th>Test Name</th>
            <th>Release 60</th> 
            <th>Release 59</th>
            <th>Release 58</th> 
            <th>Release 57</th>
            <th>Release 56</th> 
            <th>Release 55</th>
          </tr>
          <tr>
            <td className="Test-name">CSR001</td>
            <td><a href="https://hcigroupinc.sharepoint.com/sites/ExzeoUSA/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FExzeoUSA%2FShared%20Documents%2FExzeo%20Team%20Folder%2FHarmony%2FQA%2FSelenium%20UI%20Automation%20Results%2F2020%2F2020%2D62%20%2D%20DevOPs%20istio%2FCSR%20%2D%20prod%20%2D%2003%2E04%2E2020%2FCSRTC%2D001%2DPASSED%2Dcsr%5Fai%5Fquote%2Dprod%2Dchrome%2D3%2E4%2E2020%2D9%2E46%2E18%20pm%2Ehtml&parent=%2Fsites%2FExzeoUSA%2FShared%20Documents%2FExzeo%20Team%20Folder%2FHarmony%2FQA%2FSelenium%20UI%20Automation%20Results%2F2020%2F2020%2D62%20%2D%20DevOPs%20istio%2FCSR%20%2D%20prod%20%2D%2003%2E04%2E2020">PASSED</a></td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
          <tr>
            <td className="Test-name">CSR002</td>
            <td>PASSED</td>
            <td>FAILED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
          <tr>
            <td className="Test-name">CSR003</td>
            <td>FAILED</td>
            <td>FAILED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
          <tr>
            <td className="Test-name">CSR004</td>
            <td>FAILED</td>
            <td>FAILED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
          <tr>
            <td className="Test-name">CSR005</td>
            <td>FAILED</td>
            <td>FAILED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
          <tr>
            <td className="Test-name">CSR006</td>
            <td>FAILED</td>
            <td>FAILED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
          <tr>
            <td className="Test-name">CSR007</td>
            <td>FAILED</td>
            <td>FAILED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
          <tr>
            <td className="Test-name">CSR008</td>
            <td>FAILED</td>
            <td>FAILED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
          <tr>
            <td className="Test-name">CSR009</td>
            <td>FAILED</td>
            <td>FAILED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
          <tr>
            <td className="Test-name">CSR010</td>
            <td>FAILED</td>
            <td>FAILED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
            <td>PASSED</td>
          </tr>
        </table>
       </header>
    </div>
  );
}

export default App;
