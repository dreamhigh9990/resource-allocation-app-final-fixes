import { ProjectModel } from 'src/app/project/project-model';

const { fields } = ProjectModel;

export default [
  fields.projectId,
  fields.name,
  fields.type,
];
