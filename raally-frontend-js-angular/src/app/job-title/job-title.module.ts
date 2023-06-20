import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  JobTitleRoutingModule,
  routedComponents,
} from 'src/app/job-title/job-title-routing.module';
import { JobTitleListFilterComponent } from 'src/app/job-title/list/filter/job-title-list-filter.component';
import { JobTitleListTableComponent } from 'src/app/job-title/list/table/job-title-list-table.component';
import { JobTitleListToolbarComponent } from 'src/app/job-title/list/toolbar/job-title-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobTitleViewToolbarComponent } from 'src/app/job-title/view/job-title-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { JobTitleImporterService } from 'src/app/job-title/importer/job-title-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    JobTitleListFilterComponent,
    JobTitleListTableComponent,
    JobTitleListToolbarComponent,
    JobTitleViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    JobTitleRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: JobTitleImporterService,
    },
  ],
})
export class JobTitleModule {}
