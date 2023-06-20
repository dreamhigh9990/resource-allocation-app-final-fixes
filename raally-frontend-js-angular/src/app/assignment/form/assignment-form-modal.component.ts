import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AssignmentApi } from 'src/app/assignment/assignment.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-assignment-form-modal',
  templateUrl: './assignment-form-modal.component.html',
})
export class AssignmentFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      AssignmentFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await AssignmentApi.create(values);
      const record = await AssignmentApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.assignment.create.success'),
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
