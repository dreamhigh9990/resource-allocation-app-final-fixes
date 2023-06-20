import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ProjectApi } from 'src/app/project/project.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-project-form-modal',
  templateUrl: './project-form-modal.component.html',
})
export class ProjectFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ProjectFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ProjectApi.create(values);
      const record = await ProjectApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.project.create.success'),
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
