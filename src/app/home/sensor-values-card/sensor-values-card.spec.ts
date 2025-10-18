import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorValuesCard } from './sensor-values-card';

describe('SensorValuesCard', () => {
  let component: SensorValuesCard;
  let fixture: ComponentFixture<SensorValuesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorValuesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorValuesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
