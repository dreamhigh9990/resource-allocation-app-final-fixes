import { PersonModel } from 'src/app/person/person-model';

const { fields } = PersonModel;

export default [
  fields.id,
  fields.fullName,
  fields.createdAt,
  fields.updatedAt,
];
