import { Component, Input } from '@angular/core';
import { AssignmentFormModalService } from 'src/app/assignment/form/assignment-form-modal.service';
import { AssignmentService } from 'src/app/assignment/assignment.service';

@Component({
  selector: 'app-assignment-form-field',
  templateUrl: './assignment-form-field.component.html',
})
export class AssignmentFormFieldComponent {
  @Input() mode = 'single';
  @Input() submitted = false;
  @Input() control;
  @Input() label;
  @Input() required = false;
  @Input() appAutofocus = false;
  @Input() serverSideSearch = false;
  @Input() fetchFn = null;
  @Input() mapperFn = null;
  @Input()
  ngForm: any;
  @Input() showCreate = false;
  @Input() hint;
  @Input() placeholder;

  constructor(
    public service: AssignmentFormModalService,
    public assignmentService: AssignmentService,
  ) {}

  public get hasPermissionToCreate() {
    return this.assignmentService.hasPermissionToCreate;
  }

  public async createModalOpen() {
    const record = await this.service.open();
    if (record) {
      if (this.mode === 'multiple') {
        this.control.setValue([
          ...(this.control.value || []),
          this.mapperFn(record),
        ]);
      } else {
        this.control.setValue(this.mapperFn(record));
      }
    }
  }
}
