import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { CompensationListComponent } from 'src/app/compensation/list/compensation-list.component';
import { CompensationViewComponent } from 'src/app/compensation/view/compensation-view.component';
import { CompensationImporterComponent } from 'src/app/compensation/importer/compensation-importer.component';
import { CompensationFormPageComponent } from 'src/app/compensation/form/compensation-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: CompensationFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.compensationEdit,
        },
      },
      {
        path: 'new',
        component: CompensationFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.compensationCreate,
        },
      },
      {
        path: 'import',
        component: CompensationImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.compensationImport,
        },
      },
      {
        path: ':id',
        component: CompensationViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.compensationRead,
        },
      },
      {
        path: '',
        component: CompensationListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.compensationRead,
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
export class CompensationRoutingModule {}

export const routedComponents = [
  CompensationListComponent,
  CompensationFormPageComponent,
  CompensationViewComponent,
  CompensationImporterComponent,
];
