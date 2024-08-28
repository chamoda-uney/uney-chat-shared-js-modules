import { ApplicationGroup } from "./application-group";
import { ApplicationMessage } from "./application-message";
import { ApplicationUser } from "./application-user";
import { ApplicationUserGroup } from "./application-user-group";

export const REALM_SCHEMA = [
  ApplicationMessage,
  ApplicationGroup,
  ApplicationUser,
  ApplicationUserGroup,
];
export const SCHEMA_VERSION = 14;
