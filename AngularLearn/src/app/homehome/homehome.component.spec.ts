import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomehomeComponent } from './homehome.component';

describe('HomehomeComponent', () => {
  let component: HomehomeComponent;
  let fixture: ComponentFixture<HomehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomehomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
