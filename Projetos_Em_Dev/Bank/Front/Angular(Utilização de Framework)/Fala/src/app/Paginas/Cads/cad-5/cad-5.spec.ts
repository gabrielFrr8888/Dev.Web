import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cad5 } from './cad-5';

describe('Cad5', () => {
  let component: Cad5;
  let fixture: ComponentFixture<Cad5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cad5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cad5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
