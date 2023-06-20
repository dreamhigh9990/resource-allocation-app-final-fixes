import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonModel } from 'src/app/person/person-model';
import { PersonViewService } from 'src/app/person/view/person-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
})
export class PersonViewComponent implements OnInit {
  constructor(
    private service: PersonViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return PersonModel.presenter(row, fieldName);
  }

  get fields() {
    return PersonModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.person.menu'), '/person'],
    [i18n('entities.person.view.title')],
  ];
}
