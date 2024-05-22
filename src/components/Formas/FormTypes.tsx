import { SxProps } from "@mui/material";

export type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

// type TInputProps = {
//     name: string;
//     label?: string;
//     size?: "small" | "medium";
//     fullWidth?: boolean;
//     sx?: SxProps;
//     required?: boolean;
//   };
