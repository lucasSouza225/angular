import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messagens } from './messagens';

describe('Messagens', () => {
  let component: Messagens;
  let fixture: ComponentFixture<Messagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Messagens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Messagens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
