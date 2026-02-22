import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadComp4 } from './cad-comp-4';

describe('CadComp4', () => {
  let component: CadComp4;
  let fixture: ComponentFixture<CadComp4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadComp4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadComp4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
