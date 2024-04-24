import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  @Input() shareAbleData:any;

  constructor() { }

  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyPieChart", {
      type: 'pie', //this denotes tha type of chart

      data:  {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'Page Views',
          data: this.shareAbleData,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
      
    });
  }

  destroyChart(){
    this.chart.destroy();
  }

}
