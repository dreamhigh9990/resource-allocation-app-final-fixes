import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  CompensationRoutingModule,
  routedComponents,
} from 'src/app/compensation/compensation-routing.module';
import { CompensationListFilterComponent } from 'src/app/compensation/list/filter/compensation-list-filter.component';
import { CompensationListTableComponent } from 'src/app/compensation/list/table/compensation-list-table.component';
import { CompensationListToolbarComponent } from 'src/app/compensation/list/toolbar/compensation-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompensationViewToolbarComponent } from 'src/app/compensation/view/compensation-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { CompensationImporterService } from 'src/app/compensation/importer/compensation-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    CompensationListFilterComponent,
    CompensationListTableComponent,
    CompensationListToolbarComponent,
    CompensationViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    CompensationRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: CompensationImporterService,
    },
  ],
})
export class CompensationModule {}
