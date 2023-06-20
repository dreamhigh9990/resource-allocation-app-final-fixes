import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PersonListService } from 'src/app/person/list/person-list.service';
import { PersonService } from 'src/app/person/person.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PersonDestroyService } from 'src/app/person/destroy/person-destroy.service';

@Component({
  selector: 'app-person-list-toolbar',
  templateUrl: './person-list-toolbar.component.html',
})
export class PersonListToolbarComponent {
  constructor(
    public service: PersonListService,
    private personService: PersonService,
    private destroyService: PersonDestroyService,
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
    return this.personService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.personService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.personService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.personService.hasPermissionToImport;
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
