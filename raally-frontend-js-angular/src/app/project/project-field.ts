import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ProjectApi } from 'src/app/project/project.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ProjectField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/project',
      Permissions.values.projectRead,
      ProjectApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/project',
      Permissions.values.projectRead,
      ProjectApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }
}
