import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { JobTitleListComponent } from 'src/app/job-title/list/job-title-list.component';
import { JobTitleViewComponent } from 'src/app/job-title/view/job-title-view.component';
import { JobTitleImporterComponent } from 'src/app/job-title/importer/job-title-importer.component';
import { JobTitleFormPageComponent } from 'src/app/job-title/form/job-title-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: JobTitleFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobTitleEdit,
        },
      },
      {
        path: 'new',
        component: JobTitleFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobTitleCreate,
        },
      },
      {
        path: 'import',
        component: JobTitleImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobTitleImport,
        },
      },
      {
        path: ':id',
        component: JobTitleViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobTitleRead,
        },
      },
      {
        path: '',
        component: JobTitleListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.jobTitleRead,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class JobTitleRoutingModule {}

export const routedComponents = [
  JobTitleListComponent,
  JobTitleFormPageComponent,
  JobTitleViewComponent,
  JobTitleImporterComponent,
];
