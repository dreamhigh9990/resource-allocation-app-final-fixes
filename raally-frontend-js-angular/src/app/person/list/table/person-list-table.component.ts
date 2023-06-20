import { Component } from '@angular/core';
import { PersonListService } from 'src/app/person/list/person-list.service';
import { PersonService } from 'src/app/person/person.service';
import { PersonModel } from 'src/app/person/person-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PersonDestroyService } from 'src/app/person/destroy/person-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-person-list-table',
  templateUrl: './person-list-table.component.html',
})
export class PersonListTableComponent {
  constructor(
    public service: PersonListService,
    public destroyService: PersonDestroyService,
    public personService: PersonService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return PersonModel.presenter(row, fieldName);
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
    return this.personService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.personService.hasPermissionToDestroy;
  }

  get fields() {
    return PersonModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.fullName.name,

      '_actions',
    ];
  }
}
