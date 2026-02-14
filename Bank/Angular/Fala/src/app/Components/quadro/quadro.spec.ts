import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QUadro } from './quadro';

describe('QUadro', () => {
  let component: QUadro;
  let fixture: ComponentFixture<QUadro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QUadro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QUadro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
