import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asnmnt4Component } from './asnmnt4.component';

describe('Asnmnt4Component', () => {
  let component: Asnmnt4Component;
  let fixture: ComponentFixture<Asnmnt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asnmnt4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asnmnt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
