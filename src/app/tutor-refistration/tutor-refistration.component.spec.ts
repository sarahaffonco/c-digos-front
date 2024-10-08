import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRefistrationComponent } from './tutor-refistration.component';

describe('TutorRefistrationComponent', () => {
  let component: TutorRefistrationComponent;
  let fixture: ComponentFixture<TutorRefistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorRefistrationComponent]
    });
    fixture = TestBed.createComponent(TutorRefistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
