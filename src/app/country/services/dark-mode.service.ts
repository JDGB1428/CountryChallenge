import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkModeSignal = signal<string>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'null')
  )

  updateDarkMode(){
    this.darkModeSignal.update((prev) => (prev === 'dark' ? 'null' : 'dark'))
  }

  constructor(){
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkModeSignal()))
    })
  }

}
