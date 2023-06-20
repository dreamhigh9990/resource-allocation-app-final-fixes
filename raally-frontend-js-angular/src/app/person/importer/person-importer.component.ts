import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-person-importer',
  templateUrl: './person-importer.component.html',
})
export class PersonImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.person.menu'), '/person'],
    [i18n('entities.person.importer.title')],
  ];
}
