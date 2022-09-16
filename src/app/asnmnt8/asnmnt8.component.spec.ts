import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asnmnt8Component } from './asnmnt8.component';

describe('Asnmnt8Component', () => {
  let component: Asnmnt8Component;
  let fixture: ComponentFixture<Asnmnt8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asnmnt8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asnmnt8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
