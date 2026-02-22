import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadSetAvan } from './cad-seta-avan';

describe('CadSetAvan', () => {
  let component: CadSetAvan;
  let fixture: ComponentFixture<CadSetAvan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadSetAvan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadSetAvan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
