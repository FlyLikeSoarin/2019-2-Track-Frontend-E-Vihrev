import React from 'react';

interface PropTypes {
  ID: string,
  label: string,
  options: JSX.Element[],
  detect: boolean,
}

export default function SelectBox(props: PropTypes) {
  return (
    <div className="form-group w-100">
      <label htmlFor={props.ID}>{props.label}</label>
      <select className="form-control" id={props.ID} name={props.ID}>
        {props.detect ? <option value={undefined}>{"Detect"}</option> : ''}
        {props.options}
      </select>
    </div>
  )
}
