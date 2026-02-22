import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadComp3 } from './cad-comp-3';

describe('CadComp3', () => {
  let component: CadComp3;
  let fixture: ComponentFixture<CadComp3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadComp3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadComp3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
