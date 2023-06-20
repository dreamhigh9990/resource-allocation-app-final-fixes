import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { PersonApi } from 'src/app/person/person.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class PersonField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/person',
      Permissions.values.personRead,
      PersonApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.fullName,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/person',
      Permissions.values.personRead,
      PersonApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.fullName,
        };
      },
      options,
    );
  }
}
