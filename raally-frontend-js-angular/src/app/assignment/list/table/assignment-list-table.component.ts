import { Component } from '@angular/core';
import { AssignmentListService } from 'src/app/assignment/list/assignment-list.service';
import { AssignmentService } from 'src/app/assignment/assignment.service';
import { AssignmentModel } from 'src/app/assignment/assignment-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AssignmentDestroyService } from 'src/app/assignment/destroy/assignment-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-assignment-list-table',
  templateUrl: './assignment-list-table.component.html',
})
export class AssignmentListTableComponent {
  constructor(
    public service: AssignmentListService,
    public destroyService: AssignmentDestroyService,
    public assignmentService: AssignmentService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return AssignmentModel.presenter(row, fieldName);
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
    return this.assignmentService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.assignmentService.hasPermissionToDestroy;
  }

  get fields() {
    return AssignmentModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.person.name,
      this.fields.project.name,
      this.fields.hoursPerWeek.name,
      this.fields.startDate.name,
      this.fields.endDate.name,
      this.fields.role.name,
      this.fields.notes.name,

      '_actions',
    ];
  }
}
