import { Component } from '@angular/core';
import { JobTitleListService } from 'src/app/job-title/list/job-title-list.service';
import { JobTitleService } from 'src/app/job-title/job-title.service';
import { JobTitleModel } from 'src/app/job-title/job-title-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobTitleDestroyService } from 'src/app/job-title/destroy/job-title-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-title-list-table',
  templateUrl: './job-title-list-table.component.html',
})
export class JobTitleListTableComponent {
  constructor(
    public service: JobTitleListService,
    public destroyService: JobTitleDestroyService,
    public jobTitleService: JobTitleService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return JobTitleModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.jobTitleService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.jobTitleService.hasPermissionToDestroy;
  }

  get fields() {
    return JobTitleModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.person.name,
      this.fields.title.name,
      this.fields.effectiveDate.name,

      '_actions',
    ];
  }
}
