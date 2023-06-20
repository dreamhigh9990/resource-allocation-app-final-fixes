import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CompensationApi } from 'src/app/compensation/compensation.api';
import { CompensationListService } from 'src/app/compensation/list/compensation-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class CompensationDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private compensationListService: CompensationListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await CompensationApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.compensation.destroy.success'),
      );

      this.router.navigate(['/compensation']);

      await this.compensationListService.doFetch(
        this.compensationListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await CompensationApi.destroyAll(ids);
      this.loading = false;

      this.compensationListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.compensation.destroyAll.success'),
      );

      this.router.navigate(['/compensation']);

      return this.compensationListService.doFetch(
        this.compensationListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
