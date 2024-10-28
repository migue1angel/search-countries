import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {
  debounce = new Subject<string>();
  // idea de debounce
  // private debounce!: ReturnType<typeof setTimeout>;
  // onKeyPress(query: string) {
  //   if (this.debounce) {
  //     clearTimeout(this.debounce);
  //   }
  //   this.debounce = setTimeout(() => {
  //     this.inputValue.emit(query);
  //   }, 500);
  // }

  @Input()
  public placeHolder: string = '';
  @Input()
  public initialValue: string = '';

  // @Output()
  // protected inputValue = new EventEmitter<string>();
  @Output()
  protected debounceValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(500)).subscribe((value) => {
      this.debounceValue.emit(value);
    });
  }
  onKeyPress(query: string) {
    this.debounce.next(query);
  }


  // emitValue(value: string) {
  //   this.inputValue.emit(value);
  // }

}
