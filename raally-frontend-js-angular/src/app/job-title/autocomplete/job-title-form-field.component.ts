import { Component, Input } from '@angular/core';
import { JobTitleFormModalService } from 'src/app/job-title/form/job-title-form-modal.service';
import { JobTitleService } from 'src/app/job-title/job-title.service';

@Component({
  selector: 'app-job-title-form-field',
  templateUrl: './job-title-form-field.component.html',
})
export class JobTitleFormFieldComponent {
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
    public service: JobTitleFormModalService,
    public jobTitleService: JobTitleService,
  ) {}

  public get hasPermissionToCreate() {
    return this.jobTitleService.hasPermissionToCreate;
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
