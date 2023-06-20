import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentModel } from 'src/app/assignment/assignment-model';
import { AssignmentViewService } from 'src/app/assignment/view/assignment-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-assignment-view',
  templateUrl: './assignment-view.component.html',
})
export class AssignmentViewComponent implements OnInit {
  constructor(
    private service: AssignmentViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return AssignmentModel.presenter(row, fieldName);
  }

  get fields() {
    return AssignmentModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.assignment.menu'), '/assignment'],
    [i18n('entities.assignment.view.title')],
  ];
}
