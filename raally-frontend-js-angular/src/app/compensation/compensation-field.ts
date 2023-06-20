import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { CompensationApi } from 'src/app/compensation/compensation.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class CompensationField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/compensation',
      Permissions.values.compensationRead,
      CompensationApi.listAutocomplete,
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
      '/compensation',
      Permissions.values.compensationRead,
      CompensationApi.listAutocomplete,
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
