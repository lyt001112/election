import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentEditPermissionComponent } from './government-edit-permission.component';

describe('GovernmentEditPermissionComponent', () => {
  let component: GovernmentEditPermissionComponent;
  let fixture: ComponentFixture<GovernmentEditPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentEditPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentEditPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
