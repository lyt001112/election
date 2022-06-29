import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentCreateResumeComponent } from './government-create-resume.component';

describe('GovernmentCreateResumeComponent', () => {
  let component: GovernmentCreateResumeComponent;
  let fixture: ComponentFixture<GovernmentCreateResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentCreateResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentCreateResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
