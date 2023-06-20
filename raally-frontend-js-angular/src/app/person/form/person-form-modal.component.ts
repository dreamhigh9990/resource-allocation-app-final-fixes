import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PersonApi } from 'src/app/person/person.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-person-form-modal',
  templateUrl: './person-form-modal.component.html',
})
export class PersonFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      PersonFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await PersonApi.create(values);
      const record = await PersonApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.person.create.success'),
      );

      if (this.dialogRef) {
        this.dialogRef.close(record);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  doCancel() {
    this.dialogRef.close();
  }
}
