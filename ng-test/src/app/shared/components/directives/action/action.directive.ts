import { HostListener } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appAction]',
})

export class ActionDirective {
  @Output() public appAction: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', ['$event'])
  public handlerClick(event: Event): void {
    this.appAction.emit(event);
  }

  @HostListener('keyup', ['$event'])
  public handlerKeyUp(event: Event): void {
    this.appAction.emit(event);
  }
}
