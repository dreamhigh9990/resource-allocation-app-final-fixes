import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import PersonService from '../../services/personService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.personEdit,
    );

    const payload = await new PersonService(req).update(
      req.params.id,
      req.body.data,
    );
    
    // Bug #14: [Endpoint] Wrong status code returned on updating people record
    await res.status(200).send(payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
