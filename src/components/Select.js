import React from 'react';


const select = (props) => {
  return (
    <div>
      <p>{props.label}</p>
      <select value={props.value} id={props.id} onChange={props.onChange}>
        <option value="Void">...</option>
        {props.options.map((o) => {
          return <option value={o.value}>{o.label}</option>;
        })}
      </select>
    </div>
  );
};
export default select;
