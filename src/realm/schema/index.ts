import { ApplicationMessage } from "./application-message";
import { ApplicationGroup } from "./application-group";
import { ApplicationUser } from "./application-user";

export const REALM_SCHEMA = [
  ApplicationMessage,
  ApplicationGroup,
  ApplicationUser,
];
export const SCHEMA_VERSION = 3;
