import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsForm } from './moments-form';

describe('MomentsForm', () => {
  let component: MomentsForm;
  let fixture: ComponentFixture<MomentsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MomentsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
