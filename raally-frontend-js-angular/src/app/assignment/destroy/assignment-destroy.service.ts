import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AssignmentApi } from 'src/app/assignment/assignment.api';
import { AssignmentListService } from 'src/app/assignment/list/assignment-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class AssignmentDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private assignmentListService: AssignmentListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await AssignmentApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.assignment.destroy.success'),
      );

      this.router.navigate(['/assignment']);

      await this.assignmentListService.doFetch(
        this.assignmentListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await AssignmentApi.destroyAll(ids);
      this.loading = false;

      this.assignmentListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.assignment.destroyAll.success'),
      );

      this.router.navigate(['/assignment']);

      return this.assignmentListService.doFetch(
        this.assignmentListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
