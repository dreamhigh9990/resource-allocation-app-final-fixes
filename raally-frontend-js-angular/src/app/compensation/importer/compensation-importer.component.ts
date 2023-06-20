import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-compensation-importer',
  templateUrl: './compensation-importer.component.html',
})
export class CompensationImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.compensation.menu'), '/compensation'],
    [i18n('entities.compensation.importer.title')],
  ];
}
