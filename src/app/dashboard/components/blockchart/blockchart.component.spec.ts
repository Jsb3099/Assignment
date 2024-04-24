import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchartComponent } from './blockchart.component';

describe('BlockchartComponent', () => {
  let component: BlockchartComponent;
  let fixture: ComponentFixture<BlockchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
