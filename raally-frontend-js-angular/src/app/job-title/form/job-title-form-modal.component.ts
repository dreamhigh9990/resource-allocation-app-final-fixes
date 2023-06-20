import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobTitleApi } from 'src/app/job-title/job-title.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-job-title-form-modal',
  templateUrl: './job-title-form-modal.component.html',
})
export class JobTitleFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      JobTitleFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await JobTitleApi.create(values);
      const record = await JobTitleApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.jobTitle.create.success'),
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
