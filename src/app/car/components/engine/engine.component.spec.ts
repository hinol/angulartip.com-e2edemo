import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEngineComponent } from './engine.component';

describe('CarEngineComponent', () => {
  let component: CarEngineComponent;
  let fixture: ComponentFixture<CarEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
