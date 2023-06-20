import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { PersonFormPageService } from 'src/app/person/form/person-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-person-form-page',
  templateUrl: './person-form-page.component.html',
})
export class PersonFormPageComponent implements OnInit {
  constructor(
    private service: PersonFormPageService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doInit(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  get isEditing() {
    return this.route.snapshot.paramMap.has('id');
  }

  get initLoading() {
    return this.service.initLoading;
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.person.menu'), '/person'],
    [
      this.isEditing
        ? i18n('entities.person.edit.title')
        : i18n('entities.person.new.title'),
    ],
  ];

  doSave(payload) {
    if (this.isEditing) {
      return this.service.doUpdate(
        payload.id,
        payload.values,
      );
    } else {
      return this.service.doCreate(payload.values);
    }
  }

  doCancel() {
    this.router.navigate(['/person']);
  }
}
