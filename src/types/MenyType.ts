import type { Dispatch, SetStateAction } from "react";

export type MenuType = {
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
};
