import { Injectable } from '@angular/core';
import { CompensationApi } from 'src/app/compensation/compensation.api';
import compensationImporterFields from 'src/app/compensation/importer/compensation-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class CompensationImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      CompensationApi.import,
      compensationImporterFields,
      i18n('entities.compensation.importer.fileName'),
      i18n('entities.compensation.importer.hint'),
    );
  }
}
