import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ProjectViewService } from 'src/app/project/view/project-view.service';
import { ProjectService } from 'src/app/project/project.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ProjectDestroyService } from 'src/app/project/destroy/project-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-project-view-toolbar',
  templateUrl: './project-view-toolbar.component.html',
})
export class ProjectViewToolbarComponent {
  constructor(
    public service: ProjectViewService,
    private projectService: ProjectService,
    private destroyService: ProjectDestroyService,
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
    return this.projectService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.projectService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.projectService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
