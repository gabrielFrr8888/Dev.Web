import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadComp } from './cad-comp';

describe('CadComp', () => {
  let component: CadComp;
  let fixture: ComponentFixture<CadComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
