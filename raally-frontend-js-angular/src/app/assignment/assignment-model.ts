import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';
import { PersonField } from 'src/app/person/person-field';
import { ProjectField } from 'src/app/project/project-field';

function label(name) {
  return i18n(`entities.assignment.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.assignment.enumerators.${name}.${value}`);
}

function placeholder(name) {
  return i18n(`entities.assignment.placeholders.${name}`);
}

function hint(name) {
  return i18n(`entities.assignment.hints.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  person: PersonField.relationToOne('person', label('person'), {
    "placeholder": placeholder('person'),
    "hint": hint('person'),
    "required": true
  }),
  project: ProjectField.relationToOne('project', label('project'), {
    "placeholder": placeholder('project'),
    "hint": hint('project'),
    "required": true
  }),
  hoursPerWeek: new IntegerField('hoursPerWeek', label('hoursPerWeek'), {
    "placeholder": placeholder('hoursPerWeek'),
    "hint": hint('hoursPerWeek'),
    "required": true,
    "min": 0,
    "max": 40
  }),
  startDate: new DateField('startDate', label('startDate'), {
    "hint": hint('startDate'),
    "required": true
  }),
  endDate: new DateField('endDate', label('endDate'), {
    "hint": hint('endDate')
  }),
  role: new EnumeratorField('role', label('role'), [
    { id: 'project-manager', label: enumeratorLabel('role', 'project-manager') },
    { id: 'technical-team-lead', label: enumeratorLabel('role', 'technical-team-lead') },
    { id: 'lead-developer', label: enumeratorLabel('role', 'lead-developer') },
    { id: 'developer', label: enumeratorLabel('role', 'developer') },
    { id: 'qa', label: enumeratorLabel('role', 'qa') },
    { id: 'designer', label: enumeratorLabel('role', 'designer') },
  ],{
    "hint": hint('role'),
    "required": true
  }),
  notes: new StringField('notes', label('notes'), {
    "placeholder": placeholder('notes'),
    "hint": hint('notes')
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
  hoursPerWeekRange: new IntegerRangeField(
    'hoursPerWeekRange',
    label('hoursPerWeekRange'),
  ),
  startDateRange: new DateRangeField(
    'startDateRange',
    label('startDateRange'),
  ),
  endDateRange: new DateRangeField(
    'endDateRange',
    label('endDateRange'),
  ),
};

export class AssignmentModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
