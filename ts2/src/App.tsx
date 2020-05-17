import React from 'react';
import * as d3 from 'd3';
import './App.css';
import Visualization from './Visualization';
import SelectBox from './SelectBox';

const dataset: string =
	'https://raw.githubusercontent.com/amanthedorkknight/fifa18-all-player-statistics/master/2019/data.csv';

interface AppProps {}

interface Data {
	[column: string]: number[];
}

interface AppState {
	data: Data;
	columnNames: string[];
	datasetLength: number;
	lc: string;
	rc: string;
}

class App extends React.Component<AppProps, AppState> {
	public formRef: any;

	constructor(props: AppProps) {
		super(props);

		this.state = {
			data: {},
			columnNames: [],
			datasetLength: 0,
			lc: '',
			rc: '',
		};

		this.formRef = React.createRef();
	}

	componentDidMount() {
		const setStateBounded: Function = this.setState.bind(this);
		d3.csv(dataset).then(function(data: d3.DSVRowArray<string>): void {
			const prettyData: Data = {};
			for (var key in data[0]) {
				prettyData[key] = [];
			}

			for (var i: number = 0; i < Math.min(data.length, 100); ++i) {
				for (key in data[i]) {
					const value: string =
						data[i][key] !== undefined ? (data[i][key] as string) : '0';
					const numValue: number = parseInt(value);
					prettyData[key].push(isNaN(numValue) ? 0 : numValue);
				}
			}

			setStateBounded({ data: prettyData, columnNames: Object.keys(data[0]) });
		});
	}

	render() {
		const ref: any = this.formRef;
		const setStateBounded: Function = this.setState.bind(this);
		const ldata: number[] | undefined =
			this.state.lc === '' ? undefined : this.state.data[this.state.lc];
		const rdata: number[] | undefined =
			this.state.rc === '' ? undefined : this.state.data[this.state.rc];

		return (
			<div className="container">
				<div className="row justify-content-center">
					<h1>
						<span className="badge badge-primary">fifa18 data</span>
					</h1>
				</div>

				<form
					ref={this.formRef}
					onSubmit={(evt) => {
						evt.preventDefault();
						setStateBounded({
							lc: ref.current[0].value,
							rc: ref.current[2].value,
						});
					}}
				>
					<div className="row justify-content-center">
						<div className="col-md-2 mx-2">
							<SelectBox
								label="Left chart"
								ID="lc"
								options={this.state.columnNames}
							/>
						</div>
						<div className="col-md-1.5 pt-20">
							<label htmlFor="submit"> . </label>
							<button
								type="submit"
								id="submit"
								className="btn btn-primary w-100"
							>
								Display
							</button>
						</div>
						<div className="col-md-2 mx-2">
							<SelectBox
								label="Right chart"
								ID="rc"
								options={this.state.columnNames}
							/>
						</div>
					</div>
				</form>

				<div className="row justify-content-center">
					<div className="col-md-3 mx-2">
						<Visualization data={ldata} ID={'lcv'} />
					</div>
					<div className="col-md-3 mx-2">
						<Visualization data={rdata} ID={'rcv'} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
