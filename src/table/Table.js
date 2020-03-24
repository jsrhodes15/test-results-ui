import React from 'react'
import '../App.css';


const table = ( props ) => {



    return (


      <div  className = "Test-name">
  

      <tr>
      <td> Release # {props.number}</td>{



        props.content.map ((testCase) =>


      <td>
          < a href = { testCase.link } target = 'blank'>{testCase.res}</a>
      </td>



      )





    }</tr>


      </div>

    )

  }


export default table
