import { Component } from '@angular/core';
import { PersonViewService } from 'src/app/person/view/person-view.service';
import { AssignmentModel } from 'src/app/assignment/assignment-model';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-person-assignments-table',
  templateUrl: './person-assignments-table.component.html',
})
export class PersonAssignmentsTableComponent {
  constructor(
    public service: PersonViewService
  ) {}

  presenter(row, fieldName) {
    return AssignmentModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  get rows() {
    return this.service.record.assignments.rows;
  }

  get count() {
    return this.rows.length;
  }

  get hasRows() {
    return this.count > 0;
  }

  get fields() {
    return AssignmentModel.fields;
  }

  get columns() {
    return [
      this.fields.project.name,
      this.fields.hoursPerWeek.name,
      this.fields.startDate.name,
      this.fields.endDate.name,
      this.fields.role.name,
      this.fields.notes.name,
    ];
  }
}
