import React from 'react';

interface PropTypes {
	ID: string;
	label: string;
	options: string[];
}

export default function SelectBox(props: PropTypes) {
	let optionComps: JSX.Element[] = [];

	for (let i: number = 0; i < props.options.length; i += 1) {
		optionComps.push(
			<option key={i} value={props.options[i]}>
				{props.options[i]}
			</option>,
		);
	}

	return (
		<div className="form-group w-100">
			<label htmlFor={props.ID}>{props.label}</label>
			<select className="form-control" id={props.ID} name={props.ID}>
				{optionComps}
			</select>
		</div>
	);
}
