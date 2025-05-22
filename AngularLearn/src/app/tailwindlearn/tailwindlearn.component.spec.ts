import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindlearnComponent } from './tailwindlearn.component';

describe('TailwindlearnComponent', () => {
  let component: TailwindlearnComponent;
  let fixture: ComponentFixture<TailwindlearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailwindlearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindlearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
