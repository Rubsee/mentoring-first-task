import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionUserFormComponent } from './action-user-form.component';

describe('ActionUserFormComponent', () => {
  let component: ActionUserFormComponent;
  let fixture: ComponentFixture<ActionUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionUserFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
