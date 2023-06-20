import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { JobTitleApi } from 'src/app/job-title/job-title.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class JobTitleField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/job-title',
      Permissions.values.jobTitleRead,
      JobTitleApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/job-title',
      Permissions.values.jobTitleRead,
      JobTitleApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
