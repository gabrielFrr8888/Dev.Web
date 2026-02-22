import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cad4 } from './cad-4';

describe('Cad4', () => {
  let component: Cad4;
  let fixture: ComponentFixture<Cad4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cad4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cad4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
