import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ProjectApi } from 'src/app/project/project.api';
import { ProjectListService } from 'src/app/project/list/project-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ProjectDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private projectListService: ProjectListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ProjectApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.project.destroy.success'),
      );

      this.router.navigate(['/project']);

      await this.projectListService.doFetch(
        this.projectListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ProjectApi.destroyAll(ids);
      this.loading = false;

      this.projectListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.project.destroyAll.success'),
      );

      this.router.navigate(['/project']);

      return this.projectListService.doFetch(
        this.projectListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
