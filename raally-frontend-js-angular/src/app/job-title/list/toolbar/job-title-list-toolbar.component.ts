import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { JobTitleListService } from 'src/app/job-title/list/job-title-list.service';
import { JobTitleService } from 'src/app/job-title/job-title.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobTitleDestroyService } from 'src/app/job-title/destroy/job-title-destroy.service';

@Component({
  selector: 'app-job-title-list-toolbar',
  templateUrl: './job-title-list-toolbar.component.html',
})
export class JobTitleListToolbarComponent {
  constructor(
    public service: JobTitleListService,
    private jobTitleService: JobTitleService,
    private destroyService: JobTitleDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  get destroyButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading ||
      this.destroyService.loading
    );
  }

  get destroyButtonTooltip() {
    if (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    ) {
      return i18n('common.mustSelectARow');
    }
  }

  async doDestroyAllSelected() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroyAll(
      this.service.selectedKeys.selected,
    );
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.jobTitleService.hasPermissionToCreate;
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

  doExport() {
    return this.service.doExport();
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows || this.service.loading) {
      return i18n('common.noDataToExport');
    }
  }
}
