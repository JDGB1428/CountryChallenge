import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode')?? 'false')
  )

  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }

  constructor(){
    effect(() => {
      window.localStorage.setItem('darkMode',JSON.stringify(this.darkMode()))
    })
  }
}
