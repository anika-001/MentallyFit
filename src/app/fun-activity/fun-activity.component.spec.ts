import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunActivityComponent } from './fun-activity.component';

describe('FunActivityComponent', () => {
  let component: FunActivityComponent;
  let fixture: ComponentFixture<FunActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
