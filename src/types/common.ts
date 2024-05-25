import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type userRole = keyof typeof USER_ROLE;

export type sidebarItem = {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: sidebarItem[];
};

export type responseSuccessType = {
  data: any;
  meta: TMeta;
};

export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type TGenericErrorRespnse = {
  statusCode: number;
  message: string;
  errorMessage: TGenericErrorMessage[];
};

export const Gender = ["MALE", "FEMALE"];

export const Size = ["SMALL", "MEDIUM", "LARGE"];

export const roleUser = ["ADMIN", "USER"];

export const userStatus = ["ACTIVE", "BLOCKED", "DELETED"];
