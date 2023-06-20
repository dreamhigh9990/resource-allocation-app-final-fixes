import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobTitleModel } from 'src/app/job-title/job-title-model';
import { JobTitleViewService } from 'src/app/job-title/view/job-title-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-job-title-view',
  templateUrl: './job-title-view.component.html',
})
export class JobTitleViewComponent implements OnInit {
  constructor(
    private service: JobTitleViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return JobTitleModel.presenter(row, fieldName);
  }

  get fields() {
    return JobTitleModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.jobTitle.menu'), '/job-title'],
    [i18n('entities.jobTitle.view.title')],
  ];
}
