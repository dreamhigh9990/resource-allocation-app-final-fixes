import { AssignmentModel } from 'src/app/assignment/assignment-model';

const { fields } = AssignmentModel;

export default [
  fields.person,
  fields.project,
  fields.hoursPerWeek,
  fields.startDate,
  fields.endDate,
  fields.role,
  fields.notes,
];
