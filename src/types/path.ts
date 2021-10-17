import { FunctionComponent } from "react";

export interface pathObj {
  path?: string;
  name: string;
}

export interface compPathObj extends pathObj {
  component: FunctionComponent<any>;
  componentProps?: any;
}
