import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PersonApi } from 'src/app/person/person.api';
import { PersonListService } from 'src/app/person/list/person-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class PersonDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private personListService: PersonListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await PersonApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.person.destroy.success'),
      );

      this.router.navigate(['/person']);

      await this.personListService.doFetch(
        this.personListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await PersonApi.destroyAll(ids);
      this.loading = false;

      this.personListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.person.destroyAll.success'),
      );

      this.router.navigate(['/person']);

      return this.personListService.doFetch(
        this.personListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
