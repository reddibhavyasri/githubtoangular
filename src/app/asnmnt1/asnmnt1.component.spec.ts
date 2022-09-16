import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asnmnt1Component } from './asnmnt1.component';

describe('Asnmnt1Component', () => {
  let component: Asnmnt1Component;
  let fixture: ComponentFixture<Asnmnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asnmnt1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asnmnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
