import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateForm2 } from './create-form2';

describe('CreateForm2', () => {
  let component: CreateForm2;
  let fixture: ComponentFixture<CreateForm2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateForm2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateForm2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
