import { Injectable } from '@angular/core';
import { JobTitleApi } from 'src/app/job-title/job-title.api';
import jobTitleImporterFields from 'src/app/job-title/importer/job-title-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class JobTitleImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      JobTitleApi.import,
      jobTitleImporterFields,
      i18n('entities.jobTitle.importer.fileName'),
      i18n('entities.jobTitle.importer.hint'),
    );
  }
}
