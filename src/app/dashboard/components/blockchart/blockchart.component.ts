import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-blockchart',
  templateUrl: './blockchart.component.html',
  styleUrls: ['./blockchart.component.scss']
})
export class BlockchartComponent implements OnInit {

  @Input() shareAbleData:any;

  constructor() { }

  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
          label: 'MRR',
          data: this.shareAbleData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
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
