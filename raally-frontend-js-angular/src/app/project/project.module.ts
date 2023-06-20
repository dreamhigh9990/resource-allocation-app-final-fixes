import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ProjectRoutingModule,
  routedComponents,
} from 'src/app/project/project-routing.module';
import { ProjectListFilterComponent } from 'src/app/project/list/filter/project-list-filter.component';
import { ProjectListTableComponent } from 'src/app/project/list/table/project-list-table.component';
import { ProjectListToolbarComponent } from 'src/app/project/list/toolbar/project-list-toolbar.component';
import { ProjectMembersTableComponent } from 'src/app/project/view/project-members-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectViewToolbarComponent } from 'src/app/project/view/project-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ProjectImporterService } from 'src/app/project/importer/project-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ProjectListFilterComponent,
    ProjectListTableComponent,
    ProjectListToolbarComponent,
    ProjectViewToolbarComponent,
    ProjectMembersTableComponent,
  ],
  imports: [
    SharedModule,
    ProjectRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ProjectImporterService,
    },
  ],
})
export class ProjectModule {}
