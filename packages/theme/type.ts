import { COLOR } from "./color";

type Key = string | number;

export type ThemeType = {
  readonly color: typeof COLOR;
  readonly borderRadius: {
    [key in Key]: number;
  };
};
