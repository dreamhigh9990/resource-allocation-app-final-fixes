import { Injectable } from '@angular/core';
import { AssignmentApi } from 'src/app/assignment/assignment.api';
import assignmentImporterFields from 'src/app/assignment/importer/assignment-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class AssignmentImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      AssignmentApi.import,
      assignmentImporterFields,
      i18n('entities.assignment.importer.fileName'),
      i18n('entities.assignment.importer.hint'),
    );
  }
}
