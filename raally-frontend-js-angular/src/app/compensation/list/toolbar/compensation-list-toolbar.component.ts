import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CompensationListService } from 'src/app/compensation/list/compensation-list.service';
import { CompensationService } from 'src/app/compensation/compensation.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CompensationDestroyService } from 'src/app/compensation/destroy/compensation-destroy.service';

@Component({
  selector: 'app-compensation-list-toolbar',
  templateUrl: './compensation-list-toolbar.component.html',
})
export class CompensationListToolbarComponent {
  constructor(
    public service: CompensationListService,
    private compensationService: CompensationService,
    private destroyService: CompensationDestroyService,
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
    return this.compensationService.hasPermissionToCreate;
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
