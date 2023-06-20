import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TenantFormComponent } from 'src/app/tenant/form/tenant-form.component';

import { UserNewFormComponent } from 'src/app/user/form/user-new-form.component';
import { UserNewFormModalComponent } from 'src/app/user/form/user-new-form-modal.component';
import { UserNewFormModalService } from 'src/app/user/form/user-new-form-modal.service';
import { UserFormFieldComponent } from 'src/app/user/autocomplete/user-form-field.component';

import { CompensationFormFieldComponent } from 'src/app/compensation/autocomplete/compensation-form-field.component';
import { CompensationFormModalComponent } from 'src/app/compensation/form/compensation-form-modal.component';
import { CompensationFormModalService } from 'src/app/compensation/form/compensation-form-modal.service';
import { CompensationFormComponent } from 'src/app/compensation/form/compensation-form.component';

import { PersonFormFieldComponent } from 'src/app/person/autocomplete/person-form-field.component';
import { PersonFormModalComponent } from 'src/app/person/form/person-form-modal.component';
import { PersonFormModalService } from 'src/app/person/form/person-form-modal.service';
import { PersonFormComponent } from 'src/app/person/form/person-form.component';

import { JobTitleFormFieldComponent } from 'src/app/job-title/autocomplete/job-title-form-field.component';
import { JobTitleFormModalComponent } from 'src/app/job-title/form/job-title-form-modal.component';
import { JobTitleFormModalService } from 'src/app/job-title/form/job-title-form-modal.service';
import { JobTitleFormComponent } from 'src/app/job-title/form/job-title-form.component';

import { ProjectFormFieldComponent } from 'src/app/project/autocomplete/project-form-field.component';
import { ProjectFormModalComponent } from 'src/app/project/form/project-form-modal.component';
import { ProjectFormModalService } from 'src/app/project/form/project-form-modal.service';
import { ProjectFormComponent } from 'src/app/project/form/project-form.component';

import { AssignmentFormFieldComponent } from 'src/app/assignment/autocomplete/assignment-form-field.component';
import { AssignmentFormModalComponent } from 'src/app/assignment/form/assignment-form-modal.component';
import { AssignmentFormModalService } from 'src/app/assignment/form/assignment-form-modal.service';
import { AssignmentFormComponent } from 'src/app/assignment/form/assignment-form.component';

/**
 * This module exists to avoid circular dependencies, because autocompletes and forms
 * from different modules may use each others.
 */
@NgModule({
  declarations: [
    TenantFormComponent,

    UserNewFormComponent,
    UserFormFieldComponent,
    UserNewFormModalComponent,

    CompensationFormComponent,
    CompensationFormFieldComponent,
    CompensationFormModalComponent,

    PersonFormComponent,
    PersonFormFieldComponent,
    PersonFormModalComponent,

    JobTitleFormComponent,
    JobTitleFormFieldComponent,
    JobTitleFormModalComponent,

    ProjectFormComponent,
    ProjectFormFieldComponent,
    ProjectFormModalComponent,

    AssignmentFormComponent,
    AssignmentFormFieldComponent,
    AssignmentFormModalComponent,
  ],
  imports: [SharedModule],
  exports: [
    TenantFormComponent,

    UserNewFormComponent,
    UserFormFieldComponent,

    CompensationFormComponent,
    CompensationFormFieldComponent,

    PersonFormComponent,
    PersonFormFieldComponent,

    JobTitleFormComponent,
    JobTitleFormFieldComponent,

    ProjectFormComponent,
    ProjectFormFieldComponent,

    AssignmentFormComponent,
    AssignmentFormFieldComponent,
  ],
  providers: [
    UserNewFormModalService,
    CompensationFormModalService,

    PersonFormModalService,

    JobTitleFormModalService,

    ProjectFormModalService,

    AssignmentFormModalService,
  ],
  entryComponents: [
    UserNewFormModalComponent,
    CompensationFormModalComponent,

    PersonFormModalComponent,

    JobTitleFormModalComponent,

    ProjectFormModalComponent,

    AssignmentFormModalComponent,
  ],
})
export class AppFormAutocompleteModule {}
