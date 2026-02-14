import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoMedio } from './corpo-medio';

describe('CorpoMedio', () => {
  let component: CorpoMedio;
  let fixture: ComponentFixture<CorpoMedio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoMedio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoMedio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
