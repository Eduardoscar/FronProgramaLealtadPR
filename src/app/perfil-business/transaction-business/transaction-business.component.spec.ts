import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBusinessComponent } from './transaction-business.component';

describe('TransactionBusinessComponent', () => {
  let component: TransactionBusinessComponent;
  let fixture: ComponentFixture<TransactionBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
