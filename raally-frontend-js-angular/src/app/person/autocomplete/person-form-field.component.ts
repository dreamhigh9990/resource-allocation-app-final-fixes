import { Component, Input } from '@angular/core';
import { PersonFormModalService } from 'src/app/person/form/person-form-modal.service';
import { PersonService } from 'src/app/person/person.service';

@Component({
  selector: 'app-person-form-field',
  templateUrl: './person-form-field.component.html',
})
export class PersonFormFieldComponent {
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
    public service: PersonFormModalService,
    public personService: PersonService,
  ) {}

  public get hasPermissionToCreate() {
    return this.personService.hasPermissionToCreate;
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
