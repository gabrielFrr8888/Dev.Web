import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cad2 } from './cad-2';

describe('Cad2', () => {
  let component: Cad2;
  let fixture: ComponentFixture<Cad2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cad2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cad2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
