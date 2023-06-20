import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PersonViewService } from 'src/app/person/view/person-view.service';
import { PersonService } from 'src/app/person/person.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { PersonDestroyService } from 'src/app/person/destroy/person-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-person-view-toolbar',
  templateUrl: './person-view-toolbar.component.html',
})
export class PersonViewToolbarComponent {
  constructor(
    public service: PersonViewService,
    private personService: PersonService,
    private destroyService: PersonDestroyService,
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
    return this.personService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.personService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.personService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
