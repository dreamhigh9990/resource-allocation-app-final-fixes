import { Injectable } from '@angular/core';
import { PersonApi } from 'src/app/person/person.api';
import personImporterFields from 'src/app/person/importer/person-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class PersonImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      PersonApi.import,
      personImporterFields,
      i18n('entities.person.importer.fileName'),
      i18n('entities.person.importer.hint'),
    );
  }
}
