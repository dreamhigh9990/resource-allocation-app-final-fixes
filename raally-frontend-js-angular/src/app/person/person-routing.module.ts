import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { PersonListComponent } from 'src/app/person/list/person-list.component';
import { PersonViewComponent } from 'src/app/person/view/person-view.component';
import { PersonImporterComponent } from 'src/app/person/importer/person-importer.component';
import { PersonFormPageComponent } from 'src/app/person/form/person-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: PersonFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.personEdit,
        },
      },
      {
        path: 'new',
        component: PersonFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.personCreate,
        },
      },
      {
        path: 'import',
        component: PersonImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.personImport,
        },
      },
      {
        path: ':id',
        component: PersonViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.personRead,
        },
      },
      {
        path: '',
        component: PersonListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.personRead,
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
export class PersonRoutingModule {}

export const routedComponents = [
  PersonListComponent,
  PersonFormPageComponent,
  PersonViewComponent,
  PersonImporterComponent,
];
