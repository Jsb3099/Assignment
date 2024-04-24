import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss']
})
export class TextCardComponent implements OnInit {

  @Input() shareAbleData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
