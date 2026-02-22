import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadSetVolt } from './cad-seta-voltar';

describe('CadSetaVoltar', () => {
  let component: CadSetVolt;
  let fixture: ComponentFixture<CadSetVolt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadSetVolt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadSetVolt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
