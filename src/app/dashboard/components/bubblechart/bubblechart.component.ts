import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.scss']
})
export class BubblechartComponent implements OnInit {

  @Input() shareAbleData:any;

  constructor() { }

  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyBubbleChart", {
      type: 'bubble', //this denotes tha type of chart

      data: {// values on X-Axis
        datasets: [{
          label: 'MRR Stats By Country',
          data: this.shareAbleData,
          backgroundColor: 'rgb(255, 99, 132)'
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
