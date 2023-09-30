import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {
  @Input() user: any;
  @Output() userMessage: EventEmitter<string> = new EventEmitter();

  onUserEmit() {
    this.userMessage.emit('Recebi o usuário!')
  }
}
