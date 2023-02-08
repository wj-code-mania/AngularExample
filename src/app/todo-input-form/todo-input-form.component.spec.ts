import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputFormComponent } from './todo-input-form.component';

describe('TodoInputFormComponent', () => {
  let component: TodoInputFormComponent;
  let fixture: ComponentFixture<TodoInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
