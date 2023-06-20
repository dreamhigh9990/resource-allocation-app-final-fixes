import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ProjectListComponent } from 'src/app/project/list/project-list.component';
import { ProjectViewComponent } from 'src/app/project/view/project-view.component';
import { ProjectImporterComponent } from 'src/app/project/importer/project-importer.component';
import { ProjectFormPageComponent } from 'src/app/project/form/project-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ProjectFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.projectEdit,
        },
      },
      {
        path: 'new',
        component: ProjectFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.projectCreate,
        },
      },
      {
        path: 'import',
        component: ProjectImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.projectImport,
        },
      },
      {
        path: ':id',
        component: ProjectViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.projectRead,
        },
      },
      {
        path: '',
        component: ProjectListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.projectRead,
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
export class ProjectRoutingModule {}

export const routedComponents = [
  ProjectListComponent,
  ProjectFormPageComponent,
  ProjectViewComponent,
  ProjectImporterComponent,
];
