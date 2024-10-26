import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input()
  public placeHolder: string = '';

  @Output()
  protected inputValue = new EventEmitter<string>();

  emitValue(value: string) {
    this.inputValue.emit(value);
  }
}
