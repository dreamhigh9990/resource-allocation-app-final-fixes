import { Component, Input } from '@angular/core';
import { CompensationFormModalService } from 'src/app/compensation/form/compensation-form-modal.service';
import { CompensationService } from 'src/app/compensation/compensation.service';

@Component({
  selector: 'app-compensation-form-field',
  templateUrl: './compensation-form-field.component.html',
})
export class CompensationFormFieldComponent {
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
    public service: CompensationFormModalService,
    public compensationService: CompensationService,
  ) {}

  public get hasPermissionToCreate() {
    return this.compensationService.hasPermissionToCreate;
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
