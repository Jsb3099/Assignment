import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { BlockchartComponent } from '../blockchart/blockchart.component';
import { BubblechartComponent } from '../bubblechart/bubblechart.component';
import { PiechartComponent } from '../piechart/piechart.component';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  @ViewChild(PiechartComponent, { static: true })
  childPieGraph!: PiechartComponent;

  @ViewChild(BubblechartComponent, { static: true })
  childBubblechart!: BubblechartComponent;

  @ViewChild(BlockchartComponent, { static: true })
  childBlockchart!: BlockchartComponent;
  

  constructor(private commonService:CommonService) { }

  dashBoardData:any;
  shareAbleData:any;
  datePickerDB:any;

  ngOnInit(): void {
    this.datePickerDB=new Date();
    this.getDashBoardDataForStsts();
  }

  getDashBoardDataForStsts(){
    this.commonService.getDashBoardData().subscribe((data:any)=>{
      this.dashBoardData=data;
      this.orgValueChange();
    })
  }

  orgValueChange(){
    let month=new Date(this.datePickerDB).getMonth();
    let dataDate= '0'+month+'/01/2024';
    this.dashBoardData.hasOwnProperty(dataDate)?this.shareAbleData=this.dashBoardData[dataDate]:this.shareAbleData=this.dashBoardData['04/01/2024'];
    this.childPieGraph.destroyChart();
    this.childPieGraph.createChart();

    this.childBubblechart.destroyChart();
    this.childBubblechart.createChart();

    this.childBlockchart.destroyChart();
    this.childBlockchart.createChart();
  }

}
