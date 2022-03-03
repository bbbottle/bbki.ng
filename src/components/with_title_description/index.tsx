import { Article } from "@bbki.ng/components";
import React, { ComponentClass, FunctionComponent } from "react";

export const withTitleAndDescription =
  (Comp: ComponentClass<any> | FunctionComponent<any>) => (props: any) => {
    const { className, title, description, ...rest } = props;

    return (
      <div className={className}>
        <Article title={title}>
          {description && <div className="mb-128">{description}</div>}
          <Comp {...rest} />
        </Article>
      </div>
    );
  };
