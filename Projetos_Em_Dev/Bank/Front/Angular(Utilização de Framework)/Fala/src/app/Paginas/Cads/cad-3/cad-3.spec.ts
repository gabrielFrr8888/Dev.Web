import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cad3 } from './cad-3';

describe('Cad3', () => {
  let component: Cad3;
  let fixture: ComponentFixture<Cad3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cad3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cad3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
