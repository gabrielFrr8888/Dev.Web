import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cad } from './cad';

describe('Cad', () => {
  let component: Cad;
  let fixture: ComponentFixture<Cad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
