import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBusinessComponent } from './perfil-business.component';

describe('PerfilBusinessComponent', () => {
  let component: PerfilBusinessComponent;
  let fixture: ComponentFixture<PerfilBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
