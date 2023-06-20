import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CompensationViewService } from 'src/app/compensation/view/compensation-view.service';
import { CompensationService } from 'src/app/compensation/compensation.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { CompensationDestroyService } from 'src/app/compensation/destroy/compensation-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-compensation-view-toolbar',
  templateUrl: './compensation-view-toolbar.component.html',
})
export class CompensationViewToolbarComponent {
  constructor(
    public service: CompensationViewService,
    private compensationService: CompensationService,
    private destroyService: CompensationDestroyService,
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
    return this.compensationService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.compensationService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.compensationService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
