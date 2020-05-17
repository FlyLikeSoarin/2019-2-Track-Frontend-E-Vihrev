import React from 'react';
import * as d3 from 'd3';

interface VisualizationProps {
	data?: number[];
	ID: string;
}

interface VisualizationState {}

class Visualization extends React.Component<
	VisualizationProps,
	VisualizationState
> {
	componentDidUpdate(): void {
		const ID: string = this.props.ID;

		var width = (d3.select(`#${ID}`).node() as Element).getBoundingClientRect()
			.width;
		var barHeight = 30;
		var barOffset = 10;

		if (this.props.data !== undefined) {
			var height = (barHeight + barOffset) * this.props.data.length;
			var maxValue = Math.max(...this.props.data, 1);

			if (ID === 'lcv') {
				d3.selectAll('svg').remove();
			}

			d3.select(`#${ID}`)
				.append('svg')
				.attr('width', width)
				.attr('height', height)
				.attr('id', `svg-${ID}`)
				.style('background', '#ffffff')
				.selectAll('rect')
				.data(this.props.data)
				.enter()
				.append('rect')
				.style('fill', 'blue')
				.attr('height', barHeight)
				.attr('width', function(d: number): number {
					return (d / maxValue) * width;
				})
				.attr('x', function(d: number): number {
					if (ID === 'lcv') {
						return width - (d / maxValue) * width;
					}
					return 0;
				})
				.attr('y', function(d: number, i: number): number {
					return i * (barHeight + barOffset);
				});
			// .selectAll("p")
			// .data([4, 8, 15, 16, 23, 42])
			// .enter().append("p")
			// .text(function(d) { return "I’m number " + d + "!"; });
		}
	}

	render() {
		return <div id={this.props.ID} className={'w-100'}></div>;
	}
}

export default Visualization;
