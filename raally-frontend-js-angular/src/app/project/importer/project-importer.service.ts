import { Injectable } from '@angular/core';
import { ProjectApi } from 'src/app/project/project.api';
import projectImporterFields from 'src/app/project/importer/project-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ProjectApi.import,
      projectImporterFields,
      i18n('entities.project.importer.fileName'),
      i18n('entities.project.importer.hint'),
    );
  }
}
