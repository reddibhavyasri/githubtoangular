import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asnmnt6Component } from './asnmnt6.component';

describe('Asnmnt6Component', () => {
  let component: Asnmnt6Component;
  let fixture: ComponentFixture<Asnmnt6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asnmnt6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asnmnt6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
