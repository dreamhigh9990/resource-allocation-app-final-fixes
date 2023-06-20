import { Component, Input } from '@angular/core';
import { ProjectFormModalService } from 'src/app/project/form/project-form-modal.service';
import { ProjectService } from 'src/app/project/project.service';

@Component({
  selector: 'app-project-form-field',
  templateUrl: './project-form-field.component.html',
})
export class ProjectFormFieldComponent {
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
    public service: ProjectFormModalService,
    public projectService: ProjectService,
  ) {}

  public get hasPermissionToCreate() {
    return this.projectService.hasPermissionToCreate;
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
