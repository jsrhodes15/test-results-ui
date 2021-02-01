import React from 'react';
import '../../App.css';

const navigation = (props) => {
  return (
    <div className="Test-name">
      <tr>
        <td>Releases</td>

        {props.count.map((rows, index) => (
          <td>
            <a href="#"> Test #{index} </a>
          </td>
        ))}
      </tr>
    </div>
  );
};

export default navigation;
