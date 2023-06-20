import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AssignmentListService } from 'src/app/assignment/list/assignment-list.service';
import { AssignmentService } from 'src/app/assignment/assignment.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AssignmentDestroyService } from 'src/app/assignment/destroy/assignment-destroy.service';

@Component({
  selector: 'app-assignment-list-toolbar',
  templateUrl: './assignment-list-toolbar.component.html',
})
export class AssignmentListToolbarComponent {
  constructor(
    public service: AssignmentListService,
    private assignmentService: AssignmentService,
    private destroyService: AssignmentDestroyService,
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
    return this.assignmentService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.assignmentService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.assignmentService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.assignmentService.hasPermissionToImport;
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
