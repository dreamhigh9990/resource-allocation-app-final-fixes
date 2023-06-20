import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CompensationApi } from 'src/app/compensation/compensation.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-compensation-form-modal',
  templateUrl: './compensation-form-modal.component.html',
})
export class CompensationFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      CompensationFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await CompensationApi.create(values);
      const record = await CompensationApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.compensation.create.success'),
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
