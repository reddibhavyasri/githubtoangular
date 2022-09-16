import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asnmnt5Component } from './asnmnt5.component';

describe('Asnmnt5Component', () => {
  let component: Asnmnt5Component;
  let fixture: ComponentFixture<Asnmnt5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asnmnt5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asnmnt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
