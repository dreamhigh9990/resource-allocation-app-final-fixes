import { Component } from '@angular/core';
import { ProjectViewService } from 'src/app/project/view/project-view.service';
import { AssignmentModel } from 'src/app/assignment/assignment-model';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-project-members-table',
  templateUrl: './project-members-table.component.html',
})
export class ProjectMembersTableComponent {
  constructor(
    public service: ProjectViewService
  ) {}

  presenter(row, fieldName) {
    return AssignmentModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  get rows() {
    return this.service.record.teamMembers.rows;
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
      this.fields.person.name,
      this.fields.hoursPerWeek.name,
      this.fields.startDate.name,
      this.fields.endDate.name,
      this.fields.role.name,
      this.fields.notes.name,
    ];
  }
}
