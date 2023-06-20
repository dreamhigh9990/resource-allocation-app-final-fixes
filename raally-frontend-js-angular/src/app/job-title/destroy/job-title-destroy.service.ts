import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { JobTitleApi } from 'src/app/job-title/job-title.api';
import { JobTitleListService } from 'src/app/job-title/list/job-title-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class JobTitleDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private jobTitleListService: JobTitleListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await JobTitleApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.jobTitle.destroy.success'),
      );

      this.router.navigate(['/job-title']);

      await this.jobTitleListService.doFetch(
        this.jobTitleListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await JobTitleApi.destroyAll(ids);
      this.loading = false;

      this.jobTitleListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.jobTitle.destroyAll.success'),
      );

      this.router.navigate(['/job-title']);

      return this.jobTitleListService.doFetch(
        this.jobTitleListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
