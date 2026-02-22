import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadComp5 } from './cad-comp-5';

describe('CadComp5', () => {
  let component: CadComp5;
  let fixture: ComponentFixture<CadComp5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadComp5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadComp5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
