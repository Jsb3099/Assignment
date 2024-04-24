import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { CommonMaterialModule } from '../sharedModules/common-material/common-material.module';
import { TextCardComponent } from './components/text-card/text-card.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { BubblechartComponent } from './components/bubblechart/bubblechart.component';
import { BlockchartComponent } from './components/blockchart/blockchart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardMainComponent,
    TextCardComponent,
    PiechartComponent,
    BubblechartComponent,
    BlockchartComponent,
  ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    FormsModule
  ],
  exports: [
    DashboardMainComponent
  ]
})
export class DashboardModule { }
