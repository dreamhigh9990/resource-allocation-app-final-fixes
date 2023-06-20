import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';

function label(name) {
  return i18n(`entities.project.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.project.enumerators.${name}.${value}`);
}

function placeholder(name) {
  return i18n(`entities.project.placeholders.${name}`);
}

function hint(name) {
  return i18n(`entities.project.hints.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  projectId: new StringField('projectId', label('projectId'), {
    "placeholder": placeholder('projectId'),
    "hint": hint('projectId'),
    "required": true
  }),
  name: new StringField('name', label('name'), {
    "placeholder": placeholder('name'),
    "hint": hint('name'),
    "required": true,
    "min": 3
  }),
  type: new EnumeratorField('type', label('type'), [
    { id: 'managed-project', label: enumeratorLabel('type', 'managed-project') },
    { id: 'non-managed-project', label: enumeratorLabel('type', 'non-managed-project') },
    { id: 'team-augmentation', label: enumeratorLabel('type', 'team-augmentation') },
  ],{
    "placeholder": placeholder('type'),
    "hint": hint('type'),
    "required": true
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export class ProjectModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
