import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarIndexComponent } from './index.component';

describe('CarIndexComponent', () => {
  let component: CarIndexComponent;
  let fixture: ComponentFixture<CarIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
