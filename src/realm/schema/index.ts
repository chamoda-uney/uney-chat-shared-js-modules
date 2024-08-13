import { ApplicationMessage } from './application-message';
import { ApplicationGroup } from './application-group';
import { ApplicationUser } from './application-user';

const REALM_SCHEMA = [ApplicationMessage, ApplicationGroup, ApplicationUser];

export default REALM_SCHEMA;
