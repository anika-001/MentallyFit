import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyapirpComponent } from './myapirp.component';

describe('MyapirpComponent', () => {
  let component: MyapirpComponent;
  let fixture: ComponentFixture<MyapirpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyapirpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyapirpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
