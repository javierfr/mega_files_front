import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetalertComponent } from './sweetalert.component';

describe('SweetalertComponent', () => {
  let component: SweetalertComponent;
  let fixture: ComponentFixture<SweetalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
