import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleinjapanComponent } from './templeinjapan.component';

describe('TempleinjapanComponent', () => {
  let component: TempleinjapanComponent;
  let fixture: ComponentFixture<TempleinjapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleinjapanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleinjapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
