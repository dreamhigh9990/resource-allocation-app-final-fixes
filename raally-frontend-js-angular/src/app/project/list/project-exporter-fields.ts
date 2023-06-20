import { ProjectModel } from 'src/app/project/project-model';

const { fields } = ProjectModel;

export default [
  fields.id,
  fields.projectId,
  fields.name,
  fields.type,
  fields.createdAt,
  fields.updatedAt,
];
