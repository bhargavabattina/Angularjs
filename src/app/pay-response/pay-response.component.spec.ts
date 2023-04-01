import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayResponseComponent } from './pay-response.component';

describe('PayResponseComponent', () => {
  let component: PayResponseComponent;
  let fixture: ComponentFixture<PayResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
