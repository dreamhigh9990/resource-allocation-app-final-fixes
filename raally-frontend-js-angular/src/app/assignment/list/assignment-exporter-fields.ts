import { AssignmentModel } from 'src/app/assignment/assignment-model';

const { fields } = AssignmentModel;

export default [
  fields.id,
  fields.person,
  fields.project,
  fields.hoursPerWeek,
  fields.startDate,
  fields.endDate,
  fields.role,
  fields.notes,
  fields.createdAt,
  fields.updatedAt,
];
