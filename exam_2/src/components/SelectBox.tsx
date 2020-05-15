import React from 'react';

export default function SelectBox(
    ID: strign,
    label: string,
    options: JXS.Element[],
    detect: boolean
  ) {
  return (
    <div className="form-group w-100">
      <label htmlFor={ID}>{label}</label>
      <select className="form-control" id={ID} name={ID}>
        {detect ? <option value={undefined}>{"Detect"}</option> : ''}
        {options}
      </select>
    </div>
  )
}
