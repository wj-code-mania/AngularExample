import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-test',
  templateUrl: './todo-test.component.html',
  styleUrls: ['./todo-test.component.scss']
})

export class TodoTestComponent implements OnInit {
  todoList: string [] = ['aa', 'bb'];

  constructor() {

  }

  ngOnInit() {
    this.todoList = [];
    console.log('this.todoList 112: ', this.todoList);
  }

  onSubmitInput(value: string): void {
    console.log('this.todoList: ', this.todoList);
    this.todoList = [
      ...this.todoList,
      value
    ];
  }
}
