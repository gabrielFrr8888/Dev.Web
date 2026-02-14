import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barra_inferior } from './barra_inferior';

describe('Barra_inferior', () => {
  let component: Barra_inferior;
  let fixture: ComponentFixture<Barra_inferior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barra_inferior]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barra_inferior);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
