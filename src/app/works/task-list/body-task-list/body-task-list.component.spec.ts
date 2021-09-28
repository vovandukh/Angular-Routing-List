import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTaskListComponent } from './body-task-list.component';

describe('BodyTaskListComponent', () => {
  let component: BodyTaskListComponent;
  let fixture: ComponentFixture<BodyTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
