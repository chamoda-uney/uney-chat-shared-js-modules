import { ApplicationCurrentUser } from "./application-current-user";
import { ApplicationGroup } from "./application-group";
import { ApplicationMessage } from "./application-message";
import { ApplicationSecrets } from "./application-secrets";
import { ApplicationUser } from "./application-user";
import { ApplicationUserGroup } from "./application-user-group";

export const REALM_SCHEMA = [
  ApplicationMessage,
  ApplicationGroup,
  ApplicationUser,
  ApplicationUserGroup,
  ApplicationCurrentUser,
  ApplicationSecrets,
];

export const SCHEMA_VERSION = 15;
