import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterChart } from './water-chart';

describe('WaterChart', () => {
  let component: WaterChart;
  let fixture: ComponentFixture<WaterChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
