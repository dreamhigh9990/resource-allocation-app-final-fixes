import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-title-importer',
  templateUrl: './job-title-importer.component.html',
})
export class JobTitleImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobTitle.menu'), '/job-title'],
    [i18n('entities.jobTitle.importer.title')],
  ];
}
