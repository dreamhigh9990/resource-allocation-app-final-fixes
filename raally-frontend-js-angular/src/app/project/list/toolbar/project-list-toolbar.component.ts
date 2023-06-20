import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ProjectListService } from 'src/app/project/list/project-list.service';
import { ProjectService } from 'src/app/project/project.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ProjectDestroyService } from 'src/app/project/destroy/project-destroy.service';

@Component({
  selector: 'app-project-list-toolbar',
  templateUrl: './project-list-toolbar.component.html',
})
export class ProjectListToolbarComponent {
  constructor(
    public service: ProjectListService,
    private projectService: ProjectService,
    private destroyService: ProjectDestroyService,
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
    return this.projectService.hasPermissionToCreate;
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
