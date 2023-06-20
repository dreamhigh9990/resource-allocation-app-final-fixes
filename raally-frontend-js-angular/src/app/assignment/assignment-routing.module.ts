import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { AssignmentListComponent } from 'src/app/assignment/list/assignment-list.component';
import { AssignmentViewComponent } from 'src/app/assignment/view/assignment-view.component';
import { AssignmentImporterComponent } from 'src/app/assignment/importer/assignment-importer.component';
import { AssignmentFormPageComponent } from 'src/app/assignment/form/assignment-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: AssignmentFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.assignmentEdit,
        },
      },
      {
        path: 'new',
        component: AssignmentFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.assignmentCreate,
        },
      },
      {
        path: 'import',
        component: AssignmentImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.assignmentImport,
        },
      },
      {
        path: ':id',
        component: AssignmentViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.assignmentRead,
        },
      },
      {
        path: '',
        component: AssignmentListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.assignmentRead,
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
export class AssignmentRoutingModule {}

export const routedComponents = [
  AssignmentListComponent,
  AssignmentFormPageComponent,
  AssignmentViewComponent,
  AssignmentImporterComponent,
];
