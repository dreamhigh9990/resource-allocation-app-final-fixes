import { CompensationModel } from 'src/app/compensation/compensation-model';

const { fields } = CompensationModel;

export default [
  fields.id,
  fields.person,
  fields.type,
  fields.workAvailability,
  fields.monetary,
  fields.paidTimeOff,
  fields.otherBenefits,
  fields.effectiveDate,
  fields.createdAt,
  fields.updatedAt,
];
