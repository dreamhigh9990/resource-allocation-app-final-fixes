import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { AssignmentApi } from 'src/app/assignment/assignment.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class AssignmentField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/assignment',
      Permissions.values.assignmentRead,
      AssignmentApi.listAutocomplete,
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
      '/assignment',
      Permissions.values.assignmentRead,
      AssignmentApi.listAutocomplete,
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
