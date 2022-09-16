import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asnmnt9Component } from './asnmnt9.component';

describe('Asnmnt9Component', () => {
  let component: Asnmnt9Component;
  let fixture: ComponentFixture<Asnmnt9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asnmnt9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asnmnt9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
