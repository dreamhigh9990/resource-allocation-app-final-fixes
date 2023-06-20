import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SettingsService } from './settings/settings.service';
import SettingsApi from './settings/settings-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  initialized = false;

  // Bug #9: [Theme] The user is not able to change the default theme for a workspace
  constructor(public authService: AuthService, private settingsService: SettingsService) {
    this.settingsService.doInit().then(() => {
      SettingsApi.applyTheme(this.settingsService.settings.theme);
      this.authService.doInit();
    });
  }

  async ngOnInit() {
    this.initialized = await this.authService.initialized;
  }
}
