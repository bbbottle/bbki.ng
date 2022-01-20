import React, { ComponentClass, FunctionComponent } from "react";

export const withTitle =
  (Comp: ComponentClass<any> | FunctionComponent<any>) => (props: any) => {
    const { className, title, ...rest } = props;

    return (
      <div className={className}>
        <article className="prose">
          <span className="hidden">&nbsp;</span>
          <h1>{title}</h1>
          <span className="hidden">&nbsp;</span>
        </article>
        <Comp {...rest} />
      </div>
    );
  };
