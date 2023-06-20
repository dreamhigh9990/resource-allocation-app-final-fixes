import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';
import { PersonField } from 'src/app/person/person-field';

function label(name) {
  return i18n(`entities.jobTitle.fields.${name}`);
}

function hint(name) {
  return i18n(`entities.jobTitle.hints.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  person: PersonField.relationToOne('person', label('person'), {
    "required": true
  }),
  title: new StringField('title', label('title'), {
    "hint": hint('title'),
    "required": true,
    "min": 3
  }),
  effectiveDate: new DateField('effectiveDate', label('effectiveDate'), {
    "hint": hint('effectiveDate'),
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
  effectiveDateRange: new DateRangeField(
    'effectiveDateRange',
    label('effectiveDateRange'),
  ),
};

export class JobTitleModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
