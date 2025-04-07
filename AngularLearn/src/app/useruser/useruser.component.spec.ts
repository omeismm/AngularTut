import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseruserComponent } from './useruser.component';

describe('UseruserComponent', () => {
  let component: UseruserComponent;
  let fixture: ComponentFixture<UseruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseruserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
