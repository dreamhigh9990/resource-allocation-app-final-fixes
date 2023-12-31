import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-assignment-importer',
  templateUrl: './assignment-importer.component.html',
})
export class AssignmentImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.assignment.menu'), '/assignment'],
    [i18n('entities.assignment.importer.title')],
  ];
}
