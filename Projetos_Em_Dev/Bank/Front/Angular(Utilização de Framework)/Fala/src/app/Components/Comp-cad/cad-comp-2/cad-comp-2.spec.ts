import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadComp2 } from './cad-comp-2';

describe('CadComp2', () => {
  let component: CadComp2;
  let fixture: ComponentFixture<CadComp2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadComp2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadComp2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
