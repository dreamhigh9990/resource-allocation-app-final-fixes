import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JobTitleApi } from 'src/app/job-title/job-title.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class JobTitleFormPageService {
  initLoading = false;
  saveLoading = false;
  record = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) {}

  async doInit(id) {
    try {
      this.record = null;
      this.initLoading = true;

      if (id) {
        this.record = await JobTitleApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/job-title']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await JobTitleApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.jobTitle.create.success'),
      );

      this.router.navigate(['/job-title']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await JobTitleApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.jobTitle.update.success'),
      );

      this.router.navigate(['/job-title']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
