import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AssignmentViewService } from 'src/app/assignment/view/assignment-view.service';
import { AssignmentService } from 'src/app/assignment/assignment.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { AssignmentDestroyService } from 'src/app/assignment/destroy/assignment-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-assignment-view-toolbar',
  templateUrl: './assignment-view-toolbar.component.html',
})
export class AssignmentViewToolbarComponent {
  constructor(
    public service: AssignmentViewService,
    private assignmentService: AssignmentService,
    private destroyService: AssignmentDestroyService,
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
    return this.assignmentService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.assignmentService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.assignmentService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
