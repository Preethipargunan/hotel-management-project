import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymantComponent } from './paymant.component';

describe('PaymantComponent', () => {
  let component: PaymantComponent;
  let fixture: ComponentFixture<PaymantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
