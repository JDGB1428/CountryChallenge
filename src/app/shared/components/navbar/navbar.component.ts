import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, inject, signal } from '@angular/core';
import { DarkModeService } from '../../../country/services/dark-mode.service';

@Component({
  selector: 'shared-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  darkModeSevice:DarkModeService = inject(DarkModeService)

  toggleDarkMode() {
    this.darkModeSevice.updateDarkMode()
  }
}
