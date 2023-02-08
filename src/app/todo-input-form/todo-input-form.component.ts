import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-form',
  templateUrl: './todo-input-form.component.html',
  styleUrls: ['./todo-input-form.component.scss'],
})
export class TodoInputFormComponent {
  // @Input('onSubmit') onSubmitCallback: (value: string) => void = () => {};
  @Output('onSubmit') onSubmit = new EventEmitter<string>();

  inputVal: string = '';

  onClickSubmit(): void {
    console.log('this.inputVal: ', this.inputVal);
    this.onSubmit.emit(this.inputVal);
    // this.onSubmitCallback(this.inputVal);
  }
}
