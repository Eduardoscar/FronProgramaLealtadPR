import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionUserComponent } from './transaction-user.component';

describe('TransactionUserComponent', () => {
  let component: TransactionUserComponent;
  let fixture: ComponentFixture<TransactionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
