import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-project-importer',
  templateUrl: './project-importer.component.html',
})
export class ProjectImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.project.menu'), '/project'],
    [i18n('entities.project.importer.title')],
  ];
}
