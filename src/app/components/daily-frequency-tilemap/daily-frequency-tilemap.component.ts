import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Timestamp } from '@google-cloud/firestore';
// import * as d3 from 'd3';
@Component({
  selector: 'app-daily-frequency-tilemap',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './daily-frequency-tilemap.component.html',
  styleUrls: ['./daily-frequency-tilemap.component.scss']
})
export class DailyFrequencyTilemapComponent implements OnInit, OnChanges {

  @ViewChild('frequency_tilemap')
  private chartContainer: ElementRef;

  @Input() timestamps: {when: Timestamp}[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.timestamps) { return; }
    this.createChart();
  }

  formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let time = '';
    if (hours > 0) {
      time += hours === 1 ? '1 hour ' : hours + ' hours ';
    }
    if (minutes > 0) {
      time += minutes === 1 ? '1 minute' : minutes + ' minutes';
    }
    if (hours === 0 && minutes === 0) {
      time = Math.round(seconds) + ' seconds';
    }
    console.log(time);
    return time;
  }

  private createChart(): void {
    console.log(this.timestamps);
    for (const timestamp of this.timestamps) {
      console.log(timestamp.when.toDate());
    }
    // d3.select('svg').remove();

    // const element = this.chartContainer.nativeElement;
    // const data = this.data;

    // const svg = d3.select(element).append('svg')
    //     .attr('width', element.offsetWidth)
    //     .attr('height', element.offsetHeight);

    // const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    // const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

    // const x = d3
    //   .scaleBand()
    //   .rangeRound([0, contentWidth])
    //   .padding(0.1)
    //   .domain(data.map(d => d.letter));

    // const y = d3
    //   .scaleLinear()
    //   .rangeRound([contentHeight, 0])
    //   .domain([0, d3.max(data, d => d.frequency)]);

    // const g = svg.append('g')
    //   .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    // g.append('g')
    //   .attr('class', 'axis axis--x')
    //   .attr('transform', 'translate(0,' + contentHeight + ')')
    //   .call(d3.axisBottom(x));

    // g.append('g')
    //   .attr('class', 'axis axis--y')
    //   .call(d3.axisLeft(y).ticks(10, '%'))
    //   .append('text')
    //     .attr('transform', 'rotate(-90)')
    //     .attr('y', 6)
    //     .attr('dy', '0.71em')
    //     .attr('text-anchor', 'end')
    //     .text('Frequency');

    // g.selectAll('.bar')
    //   .data(data)
    //   .enter().append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', d => x(d.letter))
    //     .attr('y', d => y(d.frequency))
    //     .attr('width', x.bandwidth())
    //     .attr('height', d => contentHeight - y(d.frequency));
  }
}
