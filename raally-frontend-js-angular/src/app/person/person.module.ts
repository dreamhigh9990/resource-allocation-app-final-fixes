import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  PersonRoutingModule,
  routedComponents,
} from 'src/app/person/person-routing.module';
import { PersonListFilterComponent } from 'src/app/person/list/filter/person-list-filter.component';
import { PersonListTableComponent } from 'src/app/person/list/table/person-list-table.component';
import { PersonListToolbarComponent } from 'src/app/person/list/toolbar/person-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonViewToolbarComponent } from 'src/app/person/view/person-view-toolbar.component';
import { PersonAssignmentsTableComponent} from 'src/app/person/view/person-assignments-table.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { PersonImporterService } from 'src/app/person/importer/person-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    PersonListFilterComponent,
    PersonListTableComponent,
    PersonListToolbarComponent,
    PersonViewToolbarComponent,
    PersonAssignmentsTableComponent,
  ],
  imports: [
    SharedModule,
    PersonRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: PersonImporterService,
    },
  ],
})
export class PersonModule {}
