import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompensationModel } from 'src/app/compensation/compensation-model';
import { CompensationViewService } from 'src/app/compensation/view/compensation-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-compensation-view',
  templateUrl: './compensation-view.component.html',
})
export class CompensationViewComponent implements OnInit {
  constructor(
    private service: CompensationViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return CompensationModel.presenter(row, fieldName);
  }

  get fields() {
    return CompensationModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.compensation.menu'), '/compensation'],
    [i18n('entities.compensation.view.title')],
  ];
}
