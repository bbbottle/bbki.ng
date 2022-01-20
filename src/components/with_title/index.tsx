import { Article } from "@bbki.ng/components";
import React, { ComponentClass, FunctionComponent } from "react";

export const withTitle =
  (Comp: ComponentClass<any> | FunctionComponent<any>) => (props: any) => {
    const { className, title, ...rest } = props;

    return (
      <div className={className}>
        <Article title={title}>
          <Comp {...rest} />
        </Article>
      </div>
    );
  };
