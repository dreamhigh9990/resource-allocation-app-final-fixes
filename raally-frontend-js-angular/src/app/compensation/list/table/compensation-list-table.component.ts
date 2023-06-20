import { Component } from '@angular/core';
import { CompensationListService } from 'src/app/compensation/list/compensation-list.service';
import { CompensationService } from 'src/app/compensation/compensation.service';
import { CompensationModel } from 'src/app/compensation/compensation-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CompensationDestroyService } from 'src/app/compensation/destroy/compensation-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-compensation-list-table',
  templateUrl: './compensation-list-table.component.html',
})
export class CompensationListTableComponent {
  constructor(
    public service: CompensationListService,
    public destroyService: CompensationDestroyService,
    public compensationService: CompensationService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return CompensationModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.compensationService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.compensationService.hasPermissionToDestroy;
  }

  get fields() {
    return CompensationModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.person.name,
      this.fields.type.name,
      this.fields.workAvailability.name,
      this.fields.monetary.name,
      this.fields.paidTimeOff.name,
      this.fields.effectiveDate.name,

      '_actions',
    ];
  }
}
