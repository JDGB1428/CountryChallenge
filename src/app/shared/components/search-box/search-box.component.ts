import { CommonModule } from '@angular/common';
import { Component, effect,output, signal } from '@angular/core';


@Component({
  selector: 'shared-search-box',
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  placeholder = signal('Search')

  value = output<string>()
  inputValue = signal<string>('')

  debounceEffect = effect((onCleanup) =>{
    const value = this.inputValue();

    const timeOut = setTimeout(()=>{
      this.value.emit(value)
    },500)

    onCleanup(()=>{
      clearTimeout(timeOut)
    })
  })


}
