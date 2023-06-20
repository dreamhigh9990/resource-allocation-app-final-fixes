import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  AssignmentRoutingModule,
  routedComponents,
} from 'src/app/assignment/assignment-routing.module';
import { AssignmentListFilterComponent } from 'src/app/assignment/list/filter/assignment-list-filter.component';
import { AssignmentListTableComponent } from 'src/app/assignment/list/table/assignment-list-table.component';
import { AssignmentListToolbarComponent } from 'src/app/assignment/list/toolbar/assignment-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssignmentViewToolbarComponent } from 'src/app/assignment/view/assignment-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { AssignmentImporterService } from 'src/app/assignment/importer/assignment-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    AssignmentListFilterComponent,
    AssignmentListTableComponent,
    AssignmentListToolbarComponent,
    AssignmentViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    AssignmentRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: AssignmentImporterService,
    },
  ],
})
export class AssignmentModule {}
