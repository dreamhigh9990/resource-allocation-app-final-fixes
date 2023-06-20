import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobTitleViewService } from 'src/app/job-title/view/job-title-view.service';
import { JobTitleService } from 'src/app/job-title/job-title.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { JobTitleDestroyService } from 'src/app/job-title/destroy/job-title-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-job-title-view-toolbar',
  templateUrl: './job-title-view-toolbar.component.html',
})
export class JobTitleViewToolbarComponent {
  constructor(
    public service: JobTitleViewService,
    private jobTitleService: JobTitleService,
    private destroyService: JobTitleDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  async doDestroy() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroy(this.record.id);
  }

  get destroyLoading() {
    return this.destroyService.loading;
  }

  get hasPermissionToDestroy() {
    return this.jobTitleService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.jobTitleService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.jobTitleService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
