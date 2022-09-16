import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asnmnt7Component } from './asnmnt7.component';

describe('Asnmnt7Component', () => {
  let component: Asnmnt7Component;
  let fixture: ComponentFixture<Asnmnt7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asnmnt7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asnmnt7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
